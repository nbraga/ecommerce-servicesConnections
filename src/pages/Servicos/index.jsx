import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import Card from "../../components/Servicos-Card";
import { Box } from "@mui/material";

const Servicos = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ boxShadow: 10 }} disableGutters maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              background: "#04293A",
              minHeight: "100vh",
            }}
          >
            {servicos.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                descricao={item.descricao}
                phone={item.phone}
                icon={item.icon}
              />
            ))}
          </Box>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default Servicos;

const theme = createTheme();

const servicos = [
  {
    id: 1,
    title: "Entrega Básica",
    descricao:
      "Se você deseja realizar uma entrega de um objeto pequeno que possa ser transportado por moto, só solicitar com a gente!",
    phone: "(92) 98202-7275",
    icon: "https://img.icons8.com/external-flat-kendis-lasman/64/undefined/external-moto-travel-and-vacation-flat-kendis-lasman.png",
  },
  {
    id: 2,
    title: "Consultas com Psicóloga",
    descricao:
      "Olá, estou disponibilizando esse serviço com taxas especiais para clientes da plataforma, qualquer dúvida entre em contato, estarei a disposição",
    phone: "(92) xxxxx-xxxx",
    icon: "https://img.icons8.com/dusk/64/undefined/psychology.png",
  },
  {
    id: 3,
    title: "Frete e Mudanças",
    descricao:
      "Frete para todas as zonas da cidade, de forma simples e rápida.",
    phone: "(92) xxxxx-xxxx",
    icon: "https://img.icons8.com/fluency/48/undefined/pickup.png",
  },
  {
    id: 4,
    title: "Design Gráfico",
    descricao:
      "Criação de logomarcas, serviços, banners, cartões em gerais e tudo com um super desconto para clientes da ServConn, aproveite!",
    phone: "(92) xxxxx-xxxx",
    icon: "https://img.icons8.com/dusk/64/undefined/canva-app.png",
  },
];
