import { Node } from "react-flow-renderer";
import { Bracket as BracketNode } from "../../services/brackets";

const calculateLabel = (depth: number, bracket: BracketNode, id: string) => {
  switch (depth) {
    case 0:
      return "FINAL";
    case 1:
      return "Semi-final " + id.charAt(id.length - 1).toUpperCase();
    default:
      return `${bracket.a?.team || ""} vs ${bracket.b?.team || ""} `;
  }
};
export const calculateNodes = (
  bracket: BracketNode,
  depth = 0,
  id = ""
): Node[] => {
  const result = [];

  if (bracket.a?.a) {
    result.push(...calculateNodes(bracket.a, depth + 1, id + "a"));
  }

  if (bracket.b?.a) {
    result.push(...calculateNodes(bracket.b, depth + 1, id + "b"));
  }
  const x = depth * 200;

  const multiplier = id.split("").reduce((count, letter, index) => {
    const letterMultiplier = letter === "a" ? -1 : 1;

    return count + letterMultiplier * (result.length / 2 + depth - index);
  }, 0);

  const y = 75 * multiplier;

  return [
    {
      id: `${depth}:${id}`,
      position: {
        x,
        y,
      },
      data: {
        label: calculateLabel(depth, bracket, id),
      },
    },
    ...result,
  ];
};
