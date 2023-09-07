export const types = [
  "NORMAL",
  "FIRE",
  "WATER",
  "ELECTRIC",
  "GRASS",
  "ICE",
  "FIGHTING",
  "POISON",
  "GROUND",
  "FLYING",
  "PSYCHIC",
  "BUG",
  "ROCK",
  "GHOST",
  "DRAGON",
  "DARK",
  "STEEL",
  "FAIRY",
];

export const typesTail = {
  NORMAL: "table-cell bg-[#a8a878] text-white",
  FIRE: "table-cell bg-[#f08030] text-white",
  WATER: "table-cell bg-[#6890f0] text-white",
  ELECTRIC: "table-cell bg-[#f8d030] text-white",
  GRASS: "table-cell bg-[#78c850] text-white",
  ICE: "table-cell bg-[#98d8d8] text-white",
  FIGHTING: "table-cell bg-[#c03028] text-white",
  POISON: "table-cell bg-[#a040a0] text-white",
  GROUND: "table-cell bg-[#e0c068] text-white",
  FLYING: "table-cell bg-[#a890f0] text-white",
  PSYCHIC: "table-cell bg-[#f85888] text-white",
  BUG: "table-cell bg-[#a8b820] text-white",
  ROCK: "table-cell bg-[#b8a038] text-white",
  GHOST: "table-cell bg-[#705898] text-white",
  DRAGON: "table-cell bg-[#7038f8] text-white",
  DARK: "table-cell bg-[#705848] text-white",
  STEEL: "table-cell bg-[#b8b8d0] text-white",
  FAIRY: "table-cell bg-[#ee99ac] text-white",
};

export const abi = {
  "dry-skin": { water: 0, fire: 1.25 },
  "earth-eater": { ground: 0 },
  filter: { weak: 0.75 },
  "flash-fire": { fire: 0 },
  fluffy: { fire: 2 },
  heatproof: { fire: 0.5 },
  levitate: { ground: 0 },
  "lightning-rod": { electric: 0 },
  "motor-drive": { electric: 0 },
  "prism-armor": { weak: 0.75 },
  "purifying-salt": { ghost: 0.5 },
  "sap-sipper": { grass: 0 },
  "solid-rock": { weak: 0.75 },
  "storm-drain": { water: 0 },
  "thick-fat": { fire: 0.5, ice: 0.5 },
  "volt-absorb": { electric: 0 },
  "water-absorb": { water: 0 },
  "water-bubble": { fire: 0.5 },
  "well-baked-body": { fire: 0 },
  "wonder-guard": { notWeak: 0 },
};

export const checkWeakness = (myTypes, type, ab = "") => {
  let final = 1;
  if (!myTypes) {
    return "";
  }
  Object.keys(myTypes).map((myType) => {
    myTypes[myType].double_damage_from.map((item) => {
      if (item.name === type.toLowerCase()) {
        final *= 2;
        return;
      }
    });
    myTypes[myType].half_damage_from.map((item) => {
      if (item.name === type.toLowerCase()) {
        final *= 1 / 2;
        return;
      }
    });
    myTypes[myType].no_damage_from.map((item) => {
      if (item.name === type.toLowerCase()) {
        final = 0;
        return;
      }
    });
  });

  if (ab) {
    if (ab[type.toLowerCase()] || ab[type.toLowerCase()] === 0) {
      final *= ab[type.toLowerCase()];
    } else if (ab.weak) {
      if (final > 1) {
        final *= ab.weak;
      }
    } else if (ab.notWeak) {
      if (final < 2) {
        final *= ab.notWeak;
      }
    }
  }
  return final;
};
