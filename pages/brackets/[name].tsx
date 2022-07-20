import { GetServerSideProps } from "next";

import { getBracket } from "../../services/brackets";
import { Bracket as BracketNode } from "../../services/types";

import dynamic from "next/dynamic";
import styles from "./[name].module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.params?.name) {
    const bracket = await getBracket(context.params.name as string); // TODO

    return { props: { bracket: { bracket } } };
  }

  return { props: {} };
};
const Graph = dynamic<{ bracket: BracketNode }>(() =>
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

  const { name, bracket: bracketNode } = bracket;
  return (
    <div className={styles.bracketPage}>
      <h1>{name} Bracket</h1>

      <h2>Bracket</h2>

      <Graph bracket={bracketNode} />
    </div>
  );
}
