import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ width: 200, m: 2 }}>
      <Card>
        <CardMedia
          component="img"
          height="150"
          image={props.imagem}
          alt={props.descricao}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              fontSize={10}
              variant="body2"
              color="text.secondary"
              align="center"
            >
              {props.descricao}
            </Typography>
            <Rating
              size="small"
              name="read-only"
              value={props.avaliacao}
              readOnly
            />
            <Typography fontSize={25} gutterBottom variant="h5" component="div">
              R$ {props.valor}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="text.secondary"
            ></Typography>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#E16C06",
                ml: 1,
                ":hover": {
                  backgroundColor: "#bf360c",
                  borderColor: "#0062cc",
                  boxShadow: "none",
                  color: "white",
                },
              }}
              color="inherit"
              variant="contained"
            >
              Solicitar
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Card>
  );
}
