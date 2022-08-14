import { Stack } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import aspas from "../../assets/icones/aspas.png";
import eu from "../../assets/eu.jpg";
import git from "../../assets/icones/github.png";
import instagram from "../../assets/icones/instagramBlack.png";
import linkedin from "../../assets/icones/linkedin.png";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const cardPrincipal = () => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        width: 1,
        flexGrow: 1,
        background: "linear-gradient(to right, #c9d6ff, #e2e2e2)",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <CardMedia sx={{ width: 300, height: 300 }}>
            <Img alt="complex" src={eu} />
          </CardMedia>
        </Grid>
        <Grid sx={{ alignItems: "center" }} item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                <img src={aspas} alt="aspas" width={40} />
              </Typography>
              <Typography variant="body2" gutterBottom textAlign="justify">
                Não desista nos primeiros obstáculos, a vida é assim, nada é
                fácil e nem vem de graça, persista e se confia nos seus sonhos,
                vá até o final e aprenda com seus erros, isso é essencial!
              </Typography>
              <Typography
                mt={5}
                fontSize={20}
                fontWeight="bold"
                variant="body2"
                color="text.secondary"
              >
                Nicolas Braga
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CEO - Services Connections
              </Typography>
            </Grid>
            <Grid item>
              <Stack mt={5} spacing={2} direction="row">
                <img src={instagram} alt="instagram" width={20} />
                <img src={git} alt="instagram" width={20} />
                <img src={linkedin} alt="instagram" width={20} />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default cardPrincipal;
