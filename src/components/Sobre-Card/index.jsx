import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

const cardSobre = (props) => {
  return (
    <Card sx={{ width: 230, m: 1, background: "none", boxShadow: "none" }}>
      <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
        <img src={props.icone} alt={props.titulo} width={100} />
      </CardMedia>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
          fontSize={30}
          fontWeight="bold"
          fontFamily="garamond"
          color="#ECB365"
        >
          {props.titulo}
        </Typography>
        <Typography
          variant="body2"
          color="#ECB365"
          textAlign="center"
          fontSize={15}
        >
          {props.texto}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default cardSobre;
