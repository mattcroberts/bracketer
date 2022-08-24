import { useViewportSize } from "@mantine/hooks";
import { FC } from "react";
import ReactFlow from "react-flow-renderer";
import { Bracket as BracketNode } from "../../services/types";
import { calculateEdges } from "./calculateEdges";
import { calculateNodes } from "./calculateNodes";

export type Props = {
  bracket: BracketNode;
};

export const BracketGraph: FC<Props> = ({ bracket }) => {
  const { height, width } = useViewportSize();

  return (
    bracket && (
      <ReactFlow
        style={{ height: height / 2, width: Math.min(960, width - 80) }}
        nodes={calculateNodes(bracket)}
        edges={calculateEdges(bracket)}
        fitView
      ></ReactFlow>
    )
  );
};
