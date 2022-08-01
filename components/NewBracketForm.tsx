import { Box, Button, Stack, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { FC } from "react";
import arrayMutations from "final-form-arrays";
import { Form } from "react-final-form";
import { AiOutlinePlus } from "react-icons/ai";
import AddBracket from "./forms/AddBracket/AddBracket";
import { BracketNameField } from "./BracketNameField";
import { FieldArray } from "react-final-form-arrays";
const REQUIRED_NO_TEAMS = 4;

export type FormValues = {
  name: string;
  teams: {
    name?: string;
  }[];
};

export const NewBracketForm: FC = () => {
  const router = useRouter();

  return (
    <Form<FormValues>
      initialValues={{ teams: new Array(4).fill({}) }}
      mutators={{ ...arrayMutations }}
      onSubmit={async (data) => {
        const response = await fetch("/api/brackets", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const jsonRes = await response.json();

        await router.push(`/brackets/${jsonRes.teamName}`);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <BracketNameField />

          <Stack mb="xl">
            <Text style={{ fontWeight: "bold" }}>Teams:</Text>
            <FieldArray<FormValues["teams"][number]> name="teams">
              {({ fields }) => (
                <>
                  {fields.map((field, index) => (
                    <Box
                      key={field}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>{index + 1}.</Text>
                      <Box style={{ width: "100%", marginLeft: "1rem" }}>
                        <AddBracket
                          name={`teams.${index}.name`}
                          onClick={() => {
                            fields.remove(index);
                          }}
                        />
                      </Box>
                    </Box>
                  ))}
                  <Box>
                    <Button
                      variant="subtle"
                      onClick={() => {
                        fields.push({ name: undefined });
                      }}
                      leftIcon={<AiOutlinePlus />}
                      style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
                    >
                      Team
                    </Button>
                  </Box>
                </>
              )}
            </FieldArray>
          </Stack>

          <Button type="submit" variant="filled" color="pink" size="lg">
            Create Bracket
          </Button>
        </form>
      )}
    </Form>
  );
};
