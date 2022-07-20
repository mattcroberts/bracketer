import { Edge } from "react-flow-renderer";
import { Bracket as BracketNode } from "../../services/types";

const defaultProps = {
  type: "step",
  animated: true,
};

export const calculateEdges = (
  bracket: BracketNode,
  depth = 0,
  id = ""
): Edge[] => {
  const result = [];

  if (bracket.A?.A) {
    result.push({
      ...defaultProps,
      id: `${depth}:${id}a`,
      target: `${depth}:${id}`,
      source: `${depth + 1}:${id}A`,
    });
    result.push(...calculateEdges(bracket.A, depth + 1, id + "A"));
  }

  if (bracket.B?.A) {
    result.push({
      ...defaultProps,
      id: `${depth}:${id}b`,
      target: `${depth}:${id}`,
      source: `${depth + 1}:${id}B`,
    });
    result.push(...calculateEdges(bracket.B, depth + 1, id + "B"));
  }

  return result;
};
