import { Paper, Stack, Title } from "@mantine/core";
import Head from "next/head";
import { NewBracketForm } from "../../components/NewBracketForm";

const NewBracketPage = () => {
  return (
    <>
      <Head>
        <title>Bracketer - New Bracket</title>
      </Head>
      <Stack style={{ width: "100%" }}>
        <Title>New Bracket</Title>

        <Paper style={{ maxWidth: "24rem" }}>
          <NewBracketForm />
        </Paper>
      </Stack>
    </>
  );
};

export default NewBracketPage;
