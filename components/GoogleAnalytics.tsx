"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {
  gaId: string;
};

type GtagConfigParams = {
  page_path?: string;
};

type Gtag = {
  (command: "config", targetId: string, params?: GtagConfigParams): void;
  (command: "js", date: Date): void;
  (command: "event", eventName: string, params?: Record<string, unknown>): void;
};

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export default function GoogleAnalytics({ gaId }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams?.toString();
  const lastTrackedUrl = useRef<string | null>(null);

  useEffect(() => {
    if (!gaId) return;

    const url = search ? `${pathname}?${search}` : pathname;

    // Initial page view is handled by the gtag('config', ...) in the layout.
    // In development React Strict Mode runs effects twice, so also guard against
    // duplicate sends for the same URL.
    if (lastTrackedUrl.current === url) return;
    if (lastTrackedUrl.current === null) {
      lastTrackedUrl.current = url;
      return;
    }
    lastTrackedUrl.current = url;

    window.gtag?.("config", gaId, { page_path: url });
  }, [gaId, pathname, search]);

  return null;
}
