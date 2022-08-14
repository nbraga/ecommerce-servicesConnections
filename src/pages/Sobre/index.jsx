import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

//Components
import Perguntas from "../../components/Sobre-Acordeao";
import CardSobre from "../../components/Sobre-Card";
import CardEquipe from "../../components/Sobre-CardEquipe";
import MeuCard from "../../components/Sobre-CardPrincipal";

//Imagens
import iconeMissao from "../../assets/icones/alvo.png";
import iconeValor from "../../assets/icones/valor.png";
import iconeVisao from "../../assets/icones/visao.png";

const Sobre = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ boxShadow: 10 }} disableGutters maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              background: "#04293A",
              width: "100%",
              height: "auto",
              p: 5,
              justifyContent: "center",
              alignItems: "center",
              boxShadow: 10,
            }}
          >
            <CardSobre
              titulo="Missão"
              texto="Ser uma plataforma que ofereça diversos serviços e que ofereça oportunidades para pequenos vendedores multiplicarem os seus ganhos e vençam qualquer crise."
              icone={iconeMissao}
            />
            <CardSobre
              titulo="Visão"
              texto="Ter reconhecimento nacional e obter parcerias que possam ser colaborativas com o projeto, possibilitando o crescimento da plataforma e dos participantes."
              icone={iconeVisao}
            />
            <CardSobre
              titulo="Valor"
              texto="Manter o respeito como base e incentivar novos empreendedores para criação de novos serviços e também para a venda individual."
              icone={iconeValor}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              background: "#064663",
              width: "100%",
              p: 5,
              boxShadow: 10,
            }}
          >
            <span className="titulo">Apresentação</span>
            <MeuCard />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                p: 5,
                justifyContent: "flex-end",
              }}
            >
              <span className="titulo">
                "O sucesso nasce do querer, da determinação e persistência em se
                chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e
                vence obstáculos, no mínimo fará coisas admiráveis."
              </span>
              <span style={{ fontStyle: "italic" }}>José de Alencar</span>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              background: "#04293A",
              color: "#ECB365",
              width: "100%",
              p: 5,
              boxShadow: 10,
            }}
          >
            <span className="titulo">Equipe da ServConn</span>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                background: "#04293A",
                color: "#ECB365",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {equipe.map((item) => (
                <CardEquipe
                  key={item.id}
                  nome={item.nome}
                  cargo={item.cargo}
                  foto={item.foto}
                />
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              background: "#064663",
              color: "#ECB365",
              width: "100%",
              p: 5,
              boxShadow: 10,
            }}
          >
            <span className="titulo">Perguntas Frequentes</span>
            <Perguntas />
          </Box>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default Sobre;

const theme = createTheme();

const equipe = [
  {
    id: 1,
    nome: "ALB IPHONES",
    cargo: "Fornecedor de Iphones",
    foto: "/img/equipeSobre/alb.jpg",
  },
  {
    id: 2,
    nome: "Henrique Santana",
    cargo: "Desing Gráfico",
    foto: "/img/equipeSobre/henrique.jpg",
  },
  {
    id: 3,
    nome: "Juan Fernando",
    cargo: "Financeiro",
    foto: "/img/equipeSobre/juan.jpg",
  },
  {
    id: 4,
    nome: "Jacio Braga",
    cargo: "Serviços de Informática",
    foto: "/img/equipeSobre/infobraga.jpg",
  },
];
