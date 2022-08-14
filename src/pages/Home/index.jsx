import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";

import CardHome from "../../components/Home-Card";

//Imagens
import bgImage from "../../assets/bgHome.png";
import design1 from "../../assets/design1.png";
import design2 from "../../assets/design2.png";

import Loading from "../../components/Loading";

const theme = createTheme();

const Home = () => {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 2000);

  return (
    <ThemeProvider theme={theme}>
      <Box component="main">
        {!loading && <Loading />}
        <img className="imagens" src={bgImage} alt="ServConn" />
        <Box sx={{ display: "flex", background: "#04293A", boxShadow: 10 }}>
          <Grid item xs={false} sm={false} md={8}>
            <Card
              sx={{
                background: "none",
                boxShadow: "none",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: 500,
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                  p: 5,
                }}
              >
                <Typography
                  sx={{ fontSize: 10, mb: 10, color: "#ECB365" }}
                  color="text.secondary"
                  gutterBottom
                >
                  FACILITADOR DE NEGÓCIOS
                </Typography>
                <Typography
                  sx={{ fontSize: 25, mb: 5, color: "#ECB365" }}
                  variant="h5"
                  component="div"
                >
                  Serviços e vendas
                </Typography>
                <Typography
                  sx={{ mb: 5, color: "#ECB365" }}
                  color="text.secondary"
                  textAlign="justify"
                >
                  Podemos perceber o quanto a tecnologia vem avançando e como o
                  mercado digital está em constante evolução e com isso, nada
                  melhor do que poder anunciar serviços e vendas de produtos de
                  forma rápida e diretamente com o cliente.
                </Typography>
                <CardActions>
                  <Link to="/vendas">
                    <button className="cta">
                      <span>Saiba Mais</span>
                      <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </button>
                  </Link>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            sx={{
              backgroundImage: `url(${design1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            item
            xs={false}
            sm={false}
            md={8}
          />
        </Box>
        <Zoom>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              p: 5,
              width: "100%",
              height: "auto",

              boxShadow: 10,
            }}
          >
            {produtos.map((item) => (
              <CardHome key={item.id} title={item.title} img={item.imagem} />
            ))}
          </Box>
        </Zoom>
        <Zoom>
          <Box sx={{ display: "flex", background: "#04293A", boxShadow: 10 }}>
            <Grid
              sx={{
                backgroundImage: `url(${design2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              item
              xs={false}
              sm={false}
              md={12}
            />

            <Card
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                background: "none",
                boxShadow: "none",
                height: "100vh",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: 500,

                  justifyContent: "center",
                  alignItems: "flex-end",
                  height: "100vh",
                  p: 5,
                }}
              >
                <Typography
                  sx={{ fontSize: 10, mb: 10, color: "#ECB365" }}
                  color="text.secondary"
                  gutterBottom
                >
                  AUMENTO DE VENDAS
                </Typography>
                <Typography
                  sx={{ fontSize: 25, mb: 5, color: "#ECB365" }}
                  variant="h5"
                  component="div"
                >
                  Gerar Renda
                </Typography>
                <Typography
                  sx={{ mb: 5, color: "#ECB365" }}
                  color="text.secondary"
                  textAlign="justify"
                >
                  Qual é o “SEU DESTAQUE”? As vezes algo simples pode ser um
                  gerador de renda, mas com toda correria do dia a dia, acabamos
                  deixando isso passar despercebido, faça parte da nossa equipe,
                  contribuindo com seus serviços e produtos que desejam
                  anunciar, por mais simples que seja.
                </Typography>
                <CardActions>
                  <Link to="/contato">
                    <button className="cta">
                      <span>Saiba Mais</span>
                      <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </button>
                  </Link>
                </CardActions>
              </CardContent>
            </Card>
          </Box>
        </Zoom>
      </Box>
    </ThemeProvider>
  );
};

export default Home;

const produtos = [
  {
    id: 1,
    title: "Criação de Sites",
    imagem: "/img/cardHome/site.png",
  },
  {
    id: 2,
    title: "iPhone",
    imagem: "/img/cardHome/iphone.png",
  },
  {
    id: 3,
    title: "Roupas",
    imagem: "/img/cardHome/roupas.png",
  },
  {
    id: 4,
    title: "Serviços de Informática",
    imagem: "/img/cardHome/informatica.png",
  },
];
