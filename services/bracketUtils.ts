import { Bracket, Branch } from "./types";

export const toPairs = <T>(items: T[]): [T, T][] => {
  const p: [T, T][] = [];

  for (let i = 0; i < items.length; i += 2) {
    p.push([items[i], items[i + 1]]);
  }

  if (items.length % 2) {
    return [
      ...p.slice(0, p.length - 2),
      [p[p.length - 2][1], p[p.length - 1][0]],
    ];
  }

  return p;
};
type Recur<T> = T[] | Recur<T>[];
export const pairPairs = <T>(items: T[]): Recur<T> => {
  if (items.length > 2) {
    return pairPairs(toPairs(items));
  }

  return items;
};
export const bracketRecur = (paired: Recur<string>, depth: number): Bracket => {
  const a = Array.isArray(paired[0])
    ? bracketRecur(paired[0], depth + 1)
    : undefined;
  const b = Array.isArray(paired[1])
    ? bracketRecur(paired[1], depth + 1)
    : undefined;

  return {
    stageName: "",
    team: null,
    [Branch.A]: {
      team:
        Array.isArray(paired) && typeof paired[0] === "string"
          ? paired[0]
          : null,
      ...a,
    },
    [Branch.B]: {
      team:
        Array.isArray(paired) && typeof paired[1] === "string"
          ? paired[1]
          : null,
      ...b,
    },
  };
};
