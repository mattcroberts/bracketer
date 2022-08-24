import { Node } from "react-flow-renderer";
import { Bracket as BracketNode, Branch } from "../../services/types";

const calculateLabel = (depth: number, bracket: BracketNode, id: string) => {
  switch (depth) {
    case 0:
      return "FINAL";
    case 1:
      return "Semi-final " + id.charAt(id.length - 1).toUpperCase();
    default:
      return undefined;
  }
};
export const calculateNodes = (
  bracket: BracketNode,
  depth = 0,
  id = ""
): Node[] => {
  const result = [];

  if (bracket.A?.A) {
    result.push(...calculateNodes(bracket.A, depth + 1, id + Branch.A));
  }

  if (bracket.B?.A) {
    result.push(...calculateNodes(bracket.B, depth + 1, id + Branch.B));
  }
  const x = depth * 200;

  const multiplier = id.split("").reduce((count, letter, index) => {
    const letterMultiplier = letter === Branch.A ? -1 : 1;

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
        teamA: bracket.A?.team,
        teamB: bracket.B?.team,
        hasSource: bracket.A?.team || bracket.B?.team,
        hasTarget: bracket.A?.A || bracket.B?.A,
      },
      type: "BracketerNode",
    },
    ...result,
  ];
};
