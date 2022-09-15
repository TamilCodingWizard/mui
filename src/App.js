import Stack from "@mui/system/Stack";
import React from "react";
import Content from "./components/Content";
import RightBar from "./components/RightBar";
import Menu from "./components/Menu";
import { Container } from "@mui/system";
import NavBar from "./components/NavBar";
import { Box } from "@mui/material";

function App() {

  return (
    <Box>
      <NavBar/>
      <Container maxWidth="xl">
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Menu />
          <Content />
          <RightBar />
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
