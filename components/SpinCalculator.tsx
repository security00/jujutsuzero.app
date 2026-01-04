"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CODES_LAST_UPDATED, getActiveCodes, getCodesStats } from "@/data/codes";

type Preset = {
  label: string;
  ratePercent: number;
};

const RATE_PRESETS: Preset[] = [
  { label: "Ultra Rare (0.02%)", ratePercent: 0.02 },
  { label: "Very Rare (0.25%)", ratePercent: 0.25 },
  { label: "Rare (1.45%)", ratePercent: 1.45 },
  { label: "Uncommon (27.78%)", ratePercent: 27.78 },
  { label: "Common (70.5%)", ratePercent: 70.5 },
];

const TARGET_PROBS = [0.5, 0.75, 0.9, 0.95, 0.99] as const;

function clampNumber(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function probabilityAtLeastOne(p: number, rolls: number) {
  if (!Number.isFinite(p) || p <= 0) return 0;
  if (p >= 1) return 1;
  if (!Number.isFinite(rolls) || rolls <= 0) return 0;
  return 1 - Math.pow(1 - p, Math.floor(rolls));
}

function rollsNeededForChance(p: number, targetProb: number) {
  if (!Number.isFinite(p) || p <= 0) return Infinity;
  if (p >= 1) return 1;
  const t = clampNumber(targetProb, 0, 1);
  if (t <= 0) return 0;
  if (t >= 1) return Infinity;

  const numerator = Math.log(1 - t);
  const denominator = Math.log(1 - p);
  if (denominator === 0) return Infinity;
  return Math.ceil(numerator / denominator);
}

export default function SpinCalculator() {
  const activeStats = useMemo(() => getCodesStats(getActiveCodes()), []);
  const codesRollsAndSpins = activeStats.clanRolls + activeStats.clanSpins;

  const [ratePercent, setRatePercent] = useState<number>(0.25);
  const [rolls, setRolls] = useState<number>(codesRollsAndSpins || 0);
  const [targetProb, setTargetProb] = useState<(typeof TARGET_PROBS)[number]>(0.9);

  const p = ratePercent / 100;

  const chanceWithRolls = useMemo(() => probabilityAtLeastOne(p, rolls), [p, rolls]);
  const chanceWithCodes = useMemo(
    () => probabilityAtLeastOne(p, codesRollsAndSpins),
    [p, codesRollsAndSpins],
  );
  const expectedRolls = useMemo(() => {
    if (!Number.isFinite(p) || p <= 0) return Infinity;
    return 1 / p;
  }, [p]);

  const expectedSuccesses = useMemo(() => {
    if (!Number.isFinite(p) || p <= 0) return 0;
    if (!Number.isFinite(rolls) || rolls <= 0) return 0;
    return rolls * p;
  }, [p, rolls]);

  const results = useMemo(
    () =>
      TARGET_PROBS.map((target) => ({
        target,
        rollsNeeded: rollsNeededForChance(p, target),
      })),
    [p],
  );

  const targetRollsNeeded = useMemo(
    () => rollsNeededForChance(p, targetProb),
    [p, targetProb],
  );
  const rollsShortBy = useMemo(() => {
    if (!Number.isFinite(targetRollsNeeded)) return Infinity;
    return Math.max(0, targetRollsNeeded - rolls);
  }, [targetRollsNeeded, rolls]);

  const isRateInvalid = !Number.isFinite(ratePercent) || ratePercent <= 0 || ratePercent > 100;
  const rateHint = isRateInvalid
    ? "Enter a valid drop rate (0 < rate ≤ 100)."
    : `Chance per roll: ${(p * 100).toFixed(ratePercent < 1 ? 2 : 1)}%`;

  return (
    <div className="mt-16 bg-cursed-gray/70 backdrop-blur-md rounded-2xl border border-gray-700 p-8 shadow-2xl">
      <div className="flex items-start justify-between gap-6 flex-wrap">
        <div>
          <h2 className="text-2xl font-bold text-white">Spin Calculator</h2>
          <p className="mt-2 text-sm text-gray-400">
            Calculates how many rolls you need for a target chance. Assumes independent rolls (no
            pity/guarantee).
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Codes last updated: <span className="text-gray-300">{CODES_LAST_UPDATED}</span>
          </p>
        </div>
        <div className="text-sm">
          <Link href="/jujutsu-zero-codes" className="text-white hover:underline">
            Get more rolls via codes →
          </Link>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-gray-800 bg-black/30 p-6">
        <h3 className="text-lg font-bold text-white">Quick plan (based on today&apos;s codes)</h3>
        <p className="mt-2 text-sm text-gray-400">
          Active codes currently include{" "}
          <span className="text-gray-200 font-semibold">
            {activeStats.clanRolls.toLocaleString("en-US")}
          </span>{" "}
          Clan Rolls and{" "}
          <span className="text-gray-200 font-semibold">
            {activeStats.clanSpins.toLocaleString("en-US")}
          </span>{" "}
          Clan Spins (total attempts:{" "}
          <span className="text-gray-200 font-semibold">
            {codesRollsAndSpins.toLocaleString("en-US")}
          </span>
          ).
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {RATE_PRESETS.slice(0, 3).map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => {
                setRatePercent(preset.ratePercent);
                setRolls(codesRollsAndSpins);
                setTargetProb(0.9);
              }}
              className="px-3 py-2 rounded-xl border border-gray-700 bg-black/20 text-gray-200 text-sm hover:bg-black/30 transition-colors"
            >
              1‑click: {preset.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-800 bg-black/20 p-4">
            <p className="text-sm text-gray-400">Pick a goal</p>
            <div className="mt-3 flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-300">Target chance</span>
              <select
                value={String(targetProb)}
                onChange={(e) => setTargetProb(Number(e.target.value) as (typeof TARGET_PROBS)[number])}
                className="rounded-lg border border-gray-700 bg-black/30 px-3 py-2 text-white outline-none focus:border-cursed-purple text-sm"
              >
                {TARGET_PROBS.map((t) => (
                  <option key={t} value={t}>
                    {Math.round(t * 100)}%
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              Rolls needed at this rate:{" "}
              <span className="text-white font-bold">
                {isRateInvalid || !Number.isFinite(targetRollsNeeded)
                  ? "∞"
                  : targetRollsNeeded.toLocaleString("en-US")}
              </span>
            </div>
            <div className="mt-2 text-sm text-gray-400">
              Short by (with your rolls):{" "}
              <span className="text-white font-bold">
                {isRateInvalid || !Number.isFinite(rollsShortBy)
                  ? "∞"
                  : rollsShortBy.toLocaleString("en-US")}
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-gray-800 bg-black/20 p-4">
            <p className="text-sm text-gray-400">Using your rolls</p>
            <p className="mt-2 text-2xl font-black text-white">
              {isRateInvalid ? "—" : `${(chanceWithRolls * 100).toFixed(2)}%`}
            </p>
            <p className="mt-2 text-xs text-gray-500">Chance to hit at least once.</p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-black/20 p-4">
            <p className="text-sm text-gray-400">Using today&apos;s active codes total</p>
            <p className="mt-2 text-2xl font-black text-white">
              {isRateInvalid ? "—" : `${(chanceWithCodes * 100).toFixed(2)}%`}
            </p>
            <button
              type="button"
              onClick={() => setRolls(codesRollsAndSpins)}
              className="mt-3 text-sm text-white hover:underline"
            >
              Set rolls to {codesRollsAndSpins.toLocaleString("en-US")}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h3 className="text-lg font-bold text-white">Inputs</h3>

          <div className="mt-6 grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm text-gray-300">Drop rate (%)</span>
              <input
                type="number"
                inputMode="decimal"
                min={0}
                max={100}
                step={0.01}
                value={Number.isFinite(ratePercent) ? ratePercent : ""}
                onChange={(e) => setRatePercent(clampNumber(Number(e.target.value), 0, 100))}
                className="rounded-xl border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-cursed-purple"
                placeholder="e.g. 0.25"
              />
              <span className="text-xs text-gray-500">{rateHint}</span>
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-gray-300">Quick preset</span>
              <select
                value={String(ratePercent)}
                onChange={(e) => setRatePercent(Number(e.target.value))}
                className="rounded-xl border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-cursed-purple"
              >
                {RATE_PRESETS.map((preset) => (
                  <option key={preset.label} value={preset.ratePercent}>
                    {preset.label}
                  </option>
                ))}
              </select>
              <span className="text-xs text-gray-500">
                Presets match common clan rarity buckets (rates can change per update).
              </span>
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-gray-300">Rolls available</span>
              <input
                type="number"
                inputMode="numeric"
                min={0}
                step={1}
                value={Number.isFinite(rolls) ? rolls : ""}
                onChange={(e) => setRolls(Math.max(0, Math.floor(Number(e.target.value))))}
                className="rounded-xl border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-cursed-purple"
                placeholder="e.g. 125"
              />
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <span className="text-xs text-gray-500">
                  Tip: rolls and spins are treated the same here (one roll = one independent try).
                </span>
                <button
                  type="button"
                  onClick={() => setRolls(codesRollsAndSpins)}
                  className="text-xs text-white hover:underline"
                >
                  Use active codes total ({codesRollsAndSpins.toLocaleString("en-US")})
                </button>
              </div>
            </label>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-black/30 p-6">
          <h3 className="text-lg font-bold text-white">Results</h3>

          <div className="mt-6 grid gap-4">
            <div className="rounded-xl border border-gray-800 bg-black/20 p-4">
              <p className="text-sm text-gray-400">Chance to hit at least once</p>
              <p className="mt-2 text-3xl font-black text-white">
                {isRateInvalid ? "—" : `${(chanceWithRolls * 100).toFixed(2)}%`}
              </p>
              <p className="mt-2 text-xs text-gray-500">
                Formula: 1 − (1 − p)<sup>n</sup>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-800 bg-black/20 p-4">
                <p className="text-sm text-gray-400">Expected rolls (mean)</p>
                <p className="mt-2 text-2xl font-black text-white">
                  {isRateInvalid || !Number.isFinite(expectedRolls)
                    ? "∞"
                    : expectedRolls.toFixed(expectedRolls < 100 ? 1 : 0)}
                </p>
                <p className="mt-2 text-xs text-gray-500">Geometric: E[N] = 1 / p</p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-black/20 p-4">
                <p className="text-sm text-gray-400">Expected successes</p>
                <p className="mt-2 text-2xl font-black text-white">
                  {isRateInvalid ? "—" : expectedSuccesses.toFixed(expectedSuccesses < 10 ? 2 : 1)}
                </p>
                <p className="mt-2 text-xs text-gray-500">Binomial mean: n × p</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-gray-800 bg-black/30 p-6">
        <h3 className="text-lg font-bold text-white">Rolls needed for a target chance</h3>
        <div className="mt-4 grid gap-3">
          {results.map((row) => (
            <div
              key={row.target}
              className="flex items-center justify-between gap-4 rounded-xl border border-gray-800 bg-black/20 p-4"
            >
              <div>
                <p className="text-sm text-gray-400">Target</p>
                <p className="text-white font-bold">{Math.round(row.target * 100)}%</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Rolls needed</p>
                <p className="text-white font-black text-lg">
                  {isRateInvalid || !Number.isFinite(row.rollsNeeded)
                    ? "∞"
                    : row.rollsNeeded.toLocaleString("en-US")}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Note: If the game has pity/guarantees, the real rolls needed can be lower than this.
        </p>
      </div>
    </div>
  );
}
