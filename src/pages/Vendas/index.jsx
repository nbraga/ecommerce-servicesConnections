import { Search } from "@mui/icons-material";
import { Box, Button, Container, Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import CardVenda from "../../components/Venda-Card";
import CardProduto from "../../components/Venda-Card-Produto";
import "./styles.css";
import filtroData from "../../data/filtro";
import produtosData from "../../data/produtos";

const Item = styled(Paper)({
  background: "none",
  boxShadow: "none",
  padding: 10,
});

function Vendas() {
  const [categories, setCategories] = useState([]);
  const data = { filtroData };
  console.log(filtroData);
  console.log(produtosData);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ boxShadow: 10 }} disableGutters maxWidth="xl">
          <Box sx={{ flexGrow: 1, py: 5 }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={6}>
                <Item>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Input
                      variant="filled"
                      fullWidth
                      id="input-with-icon-adornment"
                      endAdornment={
                        <InputAdornment position="end">
                          <Button
                            sx={{
                              color: "white",
                              backgroundColor: "#E16C06",
                              mb: 1,
                              ":hover": {
                                backgroundColor: "#bf360c",
                                borderColor: "#0062cc",
                                boxShadow: "none",
                                color: "white",
                              },
                            }}
                            variant="text"
                            disableRipple
                          >
                            {<Search />}
                          </Button>
                        </InputAdornment>
                      }
                    />

                    <hr />
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      {filtroData.map((item) => (
                        <CardVenda
                          key={item.id}
                          icone={item.icone}
                          descricao={item.nome}
                        />
                      ))}
                    </Box>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={10}>
                <Item>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      borderLeft: "solid 1px",
                    }}
                  >
                    {produtosData.map((item) => (
                      <CardProduto
                        key={item.id}
                        imagem={item.imagem}
                        descricao={item.descricao}
                        avaliacao={item.avaliacao}
                        valor={item.valor}
                      />
                    ))}
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default Vendas;

const theme = createTheme();
