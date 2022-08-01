import { InputWrapper, TextInput } from "@mantine/core";
import memoize from "lodash/memoize";
import { FC } from "react";
import { useField, UseFieldConfig } from "react-final-form";
import { BiCheck, BiLoader } from "react-icons/bi";

const bracketExists = async (name: string) => {
  const response = await fetch(`/api/brackets/${name}`);
  return response.status === 200;
};

const validate: UseFieldConfig<string>["validate"] = memoize(async (value) => {
  if (!value) {
    return "Required";
  }
  return (await bracketExists(value))
    ? "Bracket with this name already exists"
    : undefined;
});

export const BracketNameField: FC = () => {
  const field = useField<string>("name", { validate });

  return (
    <InputWrapper
      label="Bracket name"
      mb="sm"
      error={field.meta.error}
      {...field.input}
    >
      <TextInput
        required
        rightSection={
          field.meta.validating ? (
            <BiLoader />
          ) : field.isDirty || field.meta.invalid ? null : (
            <BiCheck color="green" />
          )
        }
      />
    </InputWrapper>
  );
};
