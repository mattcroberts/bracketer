import { Button, Group, Stack, Text, Title } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bracketer</title>
      </Head>
      <Stack spacing={40}>
        <Title>Bracketer</Title>
        <Text>Bracketer lets you instantly create tournament brackets.</Text>
        <Group style={{ display: "flex", justifyContent: "flex-start" }}>
          <Link href="brackets/new">
            <Button variant="filled" size="xl" color="pink">
              Create new bracket
            </Button>
          </Link>

          <Link href="brackets/new">
            <Button variant="filled" size="xl" color="pink" disabled>
              Manage existing brackets
            </Button>
          </Link>
        </Group>
      </Stack>
    </>
  );
};

export default Home;
