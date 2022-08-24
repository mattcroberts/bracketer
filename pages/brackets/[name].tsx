import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

import { getBracket } from "../../services/brackets";
import { Bracket as BracketNode } from "../../services/types";

import { Title } from "@mantine/core";

const BracketGraph = dynamic<{ bracket: BracketNode }>(
  () =>
    import("../../components/BracketGraph/BracketGraph").then(
      (mod) => mod.BracketGraph
    ),
  { ssr: false }
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.params?.name) {
    try {
      const bracket = await getBracket(context.params.name as string); // TODO

      return { props: { bracket: { bracket } } };
    } catch (e) {
      return { notFound: true };
    }
  }

  return { props: {} };
};

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
