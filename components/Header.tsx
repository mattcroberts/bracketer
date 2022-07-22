import { Box, Text, useMantineTheme } from "@mantine/core";
import Link from "next/link";

export const Header = () => {
  const theme = useMantineTheme();
  return (
    <Box
      px={40}
      py={12}
      style={{
        background: theme.colors.pink[8],
        width: "100%",
      }}
    >
      <Link href="/" passHref>
        <Text component="a" size="xl" weight="bold">
          Bracketer
        </Text>
      </Link>
    </Box>
  );
};
