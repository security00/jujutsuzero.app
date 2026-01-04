export type CodeStatus = "active" | "expired";

export type CodeRewards = {
  lumens?: number;
  festiveLumens?: number;
  clanRolls?: number;
  clanSpins?: number;
  clanRerolls?: number;
  xpVows?: number;
  basicCharm?: number;
  cursedFlesh?: number;
};

export type CodeEntry = {
  code: string;
  status: CodeStatus;
  rewards: CodeRewards;
  note?: string;
  releasedAt?: string; // YYYY-MM-DD (when the code first appeared)
};

export const CODES_LAST_UPDATED = "Jan 4, 2026";

export const CODES: CodeEntry[] = [
  {
    code: "PolarizedLight",
    status: "active",
    releasedAt: "2026-01-04",
    rewards: { clanRolls: 20 },
    note: "New",
  },
  {
    code: "cursedfleshwowers",
    status: "active",
    releasedAt: "2026-01-04",
    rewards: { cursedFlesh: 1, clanRolls: 30 },
    note: "New",
  },
  {
    code: "SHRINEDOMAIN1",
    status: "active",
    releasedAt: "2026-01-04",
    rewards: { lumens: 3500, clanRolls: 75 },
    note: "New",
  },
  {
    code: "60KLIKES",
    status: "active",
    releasedAt: "2026-01-04",
    rewards: { lumens: 3500, clanRolls: 30 },
    note: "New",
  },
  {
    code: "50KLIKES",
    status: "active",
    rewards: { lumens: 4500, clanRolls: 30 },
    note: "Likes milestone",
  },
  {
    code: "happyUnbanning",
    status: "active",
    releasedAt: "2025-12-28",
    rewards: { lumens: 1000, clanRolls: 25, festiveLumens: 500 },
    note: "Unbanning celebration",
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
    code: "80Kmembers",
    status: "active",
    rewards: { lumens: 3500, clanRolls: 50 },
    note: "Members milestone",
  },
  {
    code: "20KLIKES",
    status: "active",
    rewards: { lumens: 3500, clanRolls: 35 },
    note: "Likes milestone",
  },
  {
    code: "CHARM",
    status: "active",
    rewards: { basicCharm: 1 },
  },
  {
    code: "smallfixPATCH",
    status: "active",
    rewards: { lumens: 1500, xpVows: 3, clanRolls: 15 },
  },

  // Expired / archived
  {
    code: "BETAUPDATE1",
    status: "expired",
    rewards: {},
  },
  {
    code: "40KLIKES",
    status: "expired",
    rewards: {},
  },
  {
    code: "ha36SdGCa22klwa2900Sj",
    status: "expired",
    rewards: {},
  },
  {
    code: "NEWYEAR!",
    status: "expired",
    rewards: {},
  },
  {
    code: "certainlyACodeEver",
    status: "expired",
    rewards: {},
  },
  {
    code: "buffDebuffBuffDebuff",
    status: "expired",
    rewards: {},
  },
  {
    code: "100Kmembers",
    status: "expired",
    rewards: {},
  },
  {
    code: "bugosfixedup",
    status: "expired",
    rewards: {},
  },
  {
    code: "DAMAGEBACKUPSORRYTHATWASMYFAULT",
    status: "expired",
    rewards: {},
  },
  {
    code: "FREECLANSPINSYES",
    status: "expired",
    rewards: {},
  },
  {
    code: "BETAout",
    status: "expired",
    rewards: {},
  },
  {
    code: "67kmemberscodeasabonus",
    status: "expired",
    rewards: {},
  },
  {
    code: "shutdown200821",
    status: "expired",
    rewards: {},
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
  if (rewards.cursedFlesh) parts.push(`${formatCount(rewards.cursedFlesh)} Cursed Flesh`);

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
      acc.cursedFlesh += code.rewards.cursedFlesh ?? 0;
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
      cursedFlesh: 0,
    },
  );
}

export function getReleaseHistory() {
  return CODES.filter((c) => c.releasedAt).sort((a, b) =>
    (b.releasedAt ?? "").localeCompare(a.releasedAt ?? ""),
  );
}
