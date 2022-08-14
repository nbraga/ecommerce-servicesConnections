import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import instagramImg from "../../assets/icones/instagramBlack.png";
import linkedinImg from "../../assets/icones/linkedin.png";

export default function ImgMediaCard({
  nome,
  cargo,
  foto,
  instagram,
  linkedin,
}) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 250,
        m: 1,
      }}
    >
      <CardContent>
        <Typography
          fontWeight="bold"
          gutterBottom
          variant="body2"
          component="div"
        >
          {nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cargo}
        </Typography>
      </CardContent>
      <CardMedia component="img" alt={nome} height="200" image={foto} />

      <CardActions>
        <img src={instagramImg} alt="instagram" width={20} />

        <img src={linkedinImg} alt="instagram" width={20} />
      </CardActions>
    </Card>
  );
}
