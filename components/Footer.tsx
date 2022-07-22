import { Button, Group, Text } from "@mantine/core";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

export const Footer = () => (
  <Group>
    <Text>Created by Matt Roberts</Text>

    <Button
      size="sm"
      variant="outline"
      color="#55acee"
      radius="xl"
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/MattCRoberts"
      leftIcon={<AiFillTwitterCircle size={18} />}
    >
      @MattCRoberts
    </Button>

    <Button
      size="sm"
      variant="outline"
      color="#55acee"
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      radius="xl"
      href="https://www.linkedin.com/in/mattcroberts/"
      leftIcon={<AiFillLinkedin size={18} />}
    >
      Matt Roberts
    </Button>
  </Group>
);
