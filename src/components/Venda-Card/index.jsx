import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function ActionAreaCard({ icone, descricao }) {
  return (
    <CardActionArea sx={{ width: 120, m: 1 }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={icone} alt={descricao} width={50} />
        <CardContent>
          <Typography fontSize={10} noWrap justifyContent="center">
            {descricao}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
