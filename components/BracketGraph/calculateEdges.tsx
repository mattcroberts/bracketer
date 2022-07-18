import { Edge, MarkerType } from "react-flow-renderer";
import { Bracket as BracketNode } from "../../services/brackets";

export const calculateEdges = (
  bracket: BracketNode,
  depth = 0,
  id = ""
): Edge[] => {
  const result = [];
  const type = "step";
  if (bracket.a?.a) {
    result.push({
      id: `${depth}:${id}a`,
      type,
      animated: true,
      target: `${depth}:${id}`,
      source: `${depth + 1}:${id}a`,
    });
    result.push(...calculateEdges(bracket.a, depth + 1, id + "a"));
  }

  if (bracket.b?.a) {
    result.push({
      id: `${depth}:${id}b`,
      type,
      animated: true,
      target: `${depth}:${id}`,
      source: `${depth + 1}:${id}b`,
    });
    result.push(...calculateEdges(bracket.b, depth + 1, id + "b"));
  }
  const x = depth * 200;
  const y = (id.match(/b/g) || []).length * 200;

  return result;
};
