import { CloseButton, Group, InputWrapper, TextInput } from "@mantine/core";
import { FC, ReactEventHandler } from "react";
import { useField, useForm } from "react-final-form";
import { FormValues } from "../../NewBracketForm";

const AddBracket: FC<{
  name: `teams.${number}.name`;
  onClick: ReactEventHandler<HTMLButtonElement>;
}> = ({ name, onClick }) => {
  const field = useField<FormValues["teams"][number]>(name);
  const form = useForm<FormValues>();
  const teams = form.getFieldState("teams");

  return (
    <Group>
      <InputWrapper {...field.input}>
        <TextInput required placeholder="Team name" />
      </InputWrapper>
      <CloseButton
        onClick={onClick}
        disabled={!teams?.value || teams.value.length < 5}
      />
    </Group>
  );
};

export default AddBracket;
