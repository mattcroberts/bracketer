import { GetServerSideProps } from "next";

import { getBracket } from "../../services/brackets";
import { Bracket as BracketNode } from "../../services/types";

import { Title } from "@mantine/core";
import { BracketGraph } from "../../components/BracketGraph/BracketGraph";

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.params?.name) {
    const bracket = await getBracket(context.params.name as string); // TODO

    return { props: { bracket: { bracket } } };
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
