import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ActionAreaCard(props) {
  return (
    <CardActionArea
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        width: "550px",
        height: "200px",
        boxShadow: "none",
        background: "none",
        mt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          background: "#064663",
          width: "500px",
          height: 150,
          boxShadow: 10,
          borderRadius: 5,
          m: 2,
        }}
      >
        <CardMedia
          sx={{
            width: "180px",
            height: "80px",
            position: "relative",
            top: -30,
            left: "10px",
            zIndex: 1,
            borderRadius: 5,
          }}
          image={props.icon}
          alt={props.title}
        />
        <CardContent sx={{ padding: "30px" }}>
          <Typography gutterBottom variant="h5" component="div" color="#ECB365">
            {props.title} <ArrowForwardIcon />
          </Typography>
          <Typography variant="body2" textAlign="justify" color="#ECB365">
            {props.descricao}
          </Typography>
        </CardContent>
      </Box>
    </CardActionArea>
  );
}
