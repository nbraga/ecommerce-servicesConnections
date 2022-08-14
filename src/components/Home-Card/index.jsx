import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard(props) {
  return (
    <Card
      sx={{
        background: "#04293A",
        width: 300,
        height: 250,
        m: 1,
        borderRadius: 5,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.img}
          alt={props.title}
        />
        <CardContent>
          <Typography textAlign="center" color="#ECB365">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
