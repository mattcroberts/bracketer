import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

import { getBracket } from "../../services/brackets";
import { Bracket as BracketNode } from "../../services/types";

import { Title } from "@mantine/core";

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.params?.name) {
    const bracket = await getBracket(context.params.name as string); // TODO

    return { props: { bracket: { bracket } } };
  }

  return { props: {} };
};

const BracketGraph = dynamic<{ bracket: BracketNode }>(
  () =>
    import("../../components/BracketGraph/BracketGraph").then(
      (mod) => mod.BracketGraph
    ),
  { ssr: false }
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
    <>
      <Title>{name} Bracket</Title>

      <BracketGraph bracket={bracketNode} />
    </>
  );
}
