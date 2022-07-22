import { Box, Container } from "@mantine/core";
import { FC, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <Box
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Header />
    <Container
      p={40}
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {children}
      <Footer />
    </Container>
  </Box>
);

export { Layout };
