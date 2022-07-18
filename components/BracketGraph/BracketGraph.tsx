import { FC } from "react";
import ReactFlow, { Background, Controls } from "react-flow-renderer";
import { Bracket as BracketNode } from "../../services/brackets";
import { calculateEdges } from "./calculateEdges";
import { calculateNodes } from "./calculateNodes";

export const BracketGraph: FC<{ bracket: BracketNode }> = ({ bracket }) => {
  return (
    <ReactFlow
      style={{ width: "100vh", height: "75vh" }}
      nodes={calculateNodes(bracket)}
      edges={calculateEdges(bracket)}
      fitView
    >
      <Controls />
    </ReactFlow>
  );
};
