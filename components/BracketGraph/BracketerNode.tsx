import { Box, Text, useMantineTheme } from "@mantine/core";
import { FC } from "react";
import { Handle, Position } from "react-flow-renderer";

type Props = {
  data: {
    label: string;
    teamA?: string;
    teamB?: string;
    hasSource: boolean;
    hasTarget: boolean;
  };
};

export const BracketerNode: FC<Props> = ({ data }) => {
  const theme = useMantineTheme();

  return (
    <>
      {data.hasSource && (
        <Handle type="source" isConnectable position={Position.Left} />
      )}
      <Box
        sx={{
          backgroundColor: theme.colors.pink[8],
          padding: 6,
          borderRadius: "5px",
          minWidth: 150,
          minHeight: 60,
        }}
      >
        {data.label && (
          <Text align="center" weight="bold">
            {data.label}
          </Text>
        )}
        {data.teamA && data.teamB && (
          <Text align="center" size="xs" color="dimmed">
            ({data.teamA} vs {data.teamB})
          </Text>
        )}
      </Box>
      {data.hasTarget && (
        <Handle type="target" isConnectable position={Position.Right} />
      )}
    </>
  );
};
