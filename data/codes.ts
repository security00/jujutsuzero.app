export type CodeStatus = "active" | "expired";

export type CodeRewards = {
  lumens?: number;
  festiveLumens?: number;
  clanRolls?: number;
  clanSpins?: number;
  clanRerolls?: number;
  xpVows?: number;
  basicCharm?: number;
};

export type CodeEntry = {
  code: string;
  status: CodeStatus;
  rewards: CodeRewards;
  note?: string;
  releasedAt?: string; // YYYY-MM-DD (when the code first appeared)
};

export const CODES_LAST_UPDATED = "Dec 29, 2025";

export const CODES: CodeEntry[] = [
  {
    code: "happyUnbanning",
    status: "active",
    releasedAt: "2025-12-28",
    rewards: { lumens: 1000, clanRolls: 25, festiveLumens: 500 },
    note: "Unbanning celebration",
  },
  {
    code: "40KLIKES",
    status: "active",
    releasedAt: "2025-12-28",
    rewards: { lumens: 2000, clanRolls: 40 },
    note: "40K likes milestone",
  },
  {
    code: "bugosfixedup",
    status: "active",
    releasedAt: "2025-12-28",
    rewards: { lumens: 1500, clanRolls: 15 },
    note: "Bug fixes compensation",
  },
  {
    code: "DAMAGEBACKUPSORRYTHATWASMYFAULT",
    status: "active",
    releasedAt: "2025-12-28",
    rewards: { lumens: 1000, clanRolls: 20 },
    note: "Damage system fix apology",
  },
  {
    code: "BETAUPDATE1",
    status: "active",
    releasedAt: "2025-12-27",
    rewards: { lumens: 10000, festiveLumens: 3000, clanRolls: 125 },
    note: "Beta Update 1 celebration",
  },
  {
    code: "100Kmembers",
    status: "active",
    releasedAt: "2025-12-26",
    rewards: { lumens: 10000, clanRolls: 50, festiveLumens: 1250 },
    note: "100K Discord members milestone",
  },
  {
    code: "oopsMBgg",
    status: "active",
    releasedAt: "2025-12-25",
    rewards: { clanRolls: 15, festiveLumens: 750 },
    note: "Apology code",
  },
  {
    code: "90smthKmembersYAY",
    status: "active",
    releasedAt: "2025-12-24",
    rewards: { lumens: 1500, clanSpins: 25, festiveLumens: 750 },
    note: "90K+ members celebration",
  },
  {
    code: "XMAS",
    status: "active",
    releasedAt: "2025-12-23",
    rewards: { lumens: 3500, clanSpins: 35, festiveLumens: 1250 },
    note: "Christmas event",
  },
  {
    code: "BETAout",
    status: "active",
    releasedAt: "2025-12-23",
    rewards: { lumens: 3500, clanRolls: 200 },
    note: "Open beta launch",
  },

  // Expired / archived
  {
    code: "smallfixPATCH",
    status: "expired",
    rewards: { lumens: 1500, xpVows: 3, clanRerolls: 15 },
  },
  {
    code: "CHARM",
    status: "expired",
    rewards: { basicCharm: 1 },
  },
  {
    code: "FREECLANSPINSYES",
    status: "expired",
    rewards: { clanSpins: 1000 },
  },
  {
    code: "SHUTDOWN200",
    status: "expired",
    rewards: { lumens: 3500, clanRolls: 400 },
  },
];

function formatCount(amount: number) {
  return new Intl.NumberFormat("en-US").format(amount);
}

export function formatReward(rewards: CodeRewards): string {
  const parts: string[] = [];

  if (rewards.lumens) parts.push(`${formatCount(rewards.lumens)} Lumens`);
  if (rewards.clanRolls) parts.push(`${formatCount(rewards.clanRolls)} Clan Rolls`);
  if (rewards.clanSpins) parts.push(`${formatCount(rewards.clanSpins)} Clan Spins`);
  if (rewards.festiveLumens) parts.push(`${formatCount(rewards.festiveLumens)} Festive Lumens`);
  if (rewards.clanRerolls) parts.push(`${formatCount(rewards.clanRerolls)} Clan Rerolls`);
  if (rewards.xpVows) parts.push(`${formatCount(rewards.xpVows)} XP Vows`);
  if (rewards.basicCharm) parts.push(`${formatCount(rewards.basicCharm)} Basic Charm`);

  return parts.length ? parts.join(" + ") : "Reward varies";
}

export function getActiveCodes() {
  return CODES.filter((c) => c.status === "active");
}

export function getExpiredCodes() {
  return CODES.filter((c) => c.status === "expired");
}

export function getCodesStats(codes: CodeEntry[]) {
  return codes.reduce(
    (acc, code) => {
      acc.lumens += code.rewards.lumens ?? 0;
      acc.festiveLumens += code.rewards.festiveLumens ?? 0;
      acc.clanRolls += code.rewards.clanRolls ?? 0;
      acc.clanSpins += code.rewards.clanSpins ?? 0;
      acc.clanRerolls += code.rewards.clanRerolls ?? 0;
      acc.xpVows += code.rewards.xpVows ?? 0;
      acc.basicCharm += code.rewards.basicCharm ?? 0;
      return acc;
    },
    {
      lumens: 0,
      festiveLumens: 0,
      clanRolls: 0,
      clanSpins: 0,
      clanRerolls: 0,
      xpVows: 0,
      basicCharm: 0,
    },
  );
}

export function getReleaseHistory() {
  return CODES.filter((c) => c.releasedAt).sort((a, b) =>
    (b.releasedAt ?? "").localeCompare(a.releasedAt ?? ""),
  );
}
