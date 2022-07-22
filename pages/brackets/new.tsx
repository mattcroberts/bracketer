import {
  Box,
  Button,
  InputWrapper,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Head from "next/head";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddBracket from "../../components/forms/AddBracket/AddBracket";

const INITIAL_NO_OF_TEAMS = 2;

const NewBracketPage = () => {
  const [noOfBrackets, setNoOfBrackets] = useState(INITIAL_NO_OF_TEAMS);
  return (
    <>
      <Head>
        <title>Bracketer - New Bracket</title>
      </Head>
      <Stack style={{ width: "100%" }}>
        <Title>New Bracket</Title>

        <Paper style={{ maxWidth: "24rem" }}>
          <form action="/api/create-bracket" method="post">
            <InputWrapper label="Bracket name" mb="sm">
              <TextInput name="name" required />
            </InputWrapper>

            <Stack mb="xl">
              <Text style={{ fontWeight: "bold" }}>Teams:</Text>
              {new Array(noOfBrackets).fill(0).map((_, index) => (
                <Box
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{index + 1}.</Text>
                  <Box style={{ width: "100%", marginLeft: "1rem" }}>
                    <AddBracket />
                  </Box>
                </Box>
              ))}

              <Box>
                <Button
                  variant="subtle"
                  onClick={() => {
                    setNoOfBrackets(noOfBrackets + 1);
                  }}
                  leftIcon={<AiOutlinePlus />}
                  style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
                >
                  Team
                </Button>
              </Box>
            </Stack>

            <Button type="submit" variant="filled" color="pink" size="lg">
              Create Bracket
            </Button>
          </form>
        </Paper>
      </Stack>
    </>
  );
};

export default NewBracketPage;
