import { GetServerSideProps } from "next";

import { Bracket as BracketNode, getBracket } from "../../services/brackets";

import dynamic from "next/dynamic";
import styles from "./[name].module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.params?.name) {
    const bracket = getBracket(context.params.name as string); // TODO

    return { props: { bracket } };
  }

  return { props: {} };
};
const Graph = dynamic(() =>
  import("../../components/BracketGraph/BracketGraph").then(
    (mod) => mod.BracketGraph
  )
);
export default function Bracket({
  bracket,
}: {
  bracket?: { name: string; teams: string[]; bracket: BracketNode };
}) {
  if (!bracket) {
    return null;
  }

  const { name, teams, bracket: bracketNode } = bracket;
  return (
    <div className={styles.bracketPage}>
      <h1>{name} Bracket</h1>

      <h2>Bracket</h2>

      <Graph bracket={bracketNode} />
    </div>
  );
}
