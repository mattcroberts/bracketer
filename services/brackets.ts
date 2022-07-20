import { readFileSync, writeFileSync } from "fs";
import { Bracket, Branch } from "./types";

export const toPairs = <T>(items: T[]): [T, T][] => {
  const p: [T, T][] = [];

  for (let i = 0; i < items.length; i += 2) {
    p.push([items[i], items[i + 1]]);
  }

  if (items.length % 2) {
    return [
      ...p.slice(0, p.length - 2),
      p[p.length - 2][0],
      [p[p.length - 2][1], p[p.length - 1][0]],
    ];
  }

  return p;
};
const pairPairs = <T>(items: T[]) => {
  if (items.length > 2) {
    return pairPairs(toPairs(items));
  }

  return items;
};

const brackRecur = (paired: any, depth: number): Bracket => {
  const a = Array.isArray(paired[0])
    ? brackRecur(paired[0], depth + 1)
    : undefined;
  const b = Array.isArray(paired[1])
    ? brackRecur(paired[1], depth + 1)
    : undefined;

  return {
    stageName: "",
    team: undefined,
    [Branch.A]: {
      team: Array.isArray(paired) ? paired[0] : undefined,
      ...a,
    },
    [Branch.B]: {
      team: Array.isArray(paired) ? paired[1] : undefined,
      ...b,
    },
  };
};

export const createBracket = (teams: string[]): Bracket => {
  const pairs = pairPairs(teams);

  return brackRecur(pairs, 0);
};

export const addBracket = (name: string, teams: Array<string>) => {
  const b = JSON.parse(readFileSync("./services/brackets.json").toString());
  b[name] = { name, teams, bracket: createBracket(teams) };
  writeFileSync("./services/brackets.json", JSON.stringify(b));
};

export const getBracket = (name: string) => {
  const b = JSON.parse(readFileSync("./services/brackets.json").toString());

  return b[name];
};
