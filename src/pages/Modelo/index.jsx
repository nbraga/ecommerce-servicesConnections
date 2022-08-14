import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const Sobre = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container maxWidth="md">
          <h1>Teste</h1>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default Sobre;

const theme = createTheme();
