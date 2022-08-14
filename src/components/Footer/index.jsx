import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import logo from "../../assets/logo_nome.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ButtonTexto = styled(Button)({
  color: "#ECB365",
  background: "none",
  textTransform: "capitalize",
  boxShadow: "none",
});

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#ECB365",
  background: "none",
  boxShadow: "none",
}));

function Copyright() {
  return (
    <Typography variant="body2" color="#fff" align="center">
      {"Todos os direitos reservados © "}
      <a
        target="_blank"
        rel="noreferrer"
        color="inherit"
        href="https://www.instagram.com/nclsbraga_/"
      >
        Nicolas Braga
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "Services Connections - Newsletters",
    honeypot: "", // if any value received in this field, form submission will be ignored.
    message: "",
    replyTo: "@", // this will set replyTo of email to email address entered in the form
    accessKey: "262c1e21-f984-469e-b2fd-b97bd680cb84", // get your access key from https://www.staticforms.xyz
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: "success",
          message: "Thank you for reaching out to us.",
        });
        resetarCampos();
        toast.success("Seu e-mail foi cadastrado com sucesso!");
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
        toast.error("Houve um problema ao enviar sua mensagem.");
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occured while submitting the form",
      });
    }
  };

  const resetarCampos = () => {
    setContact({ email: "" });
  };

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        bgcolor: "#06113C",
        py: 1,
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          p: 2,
        }}
      >
        <img src={logo} alt="Logo" width={500} />
        <div>
          <Stack direction="row" spacing={1}>
            <Item>
              <Link to="/vendas">
                <ButtonTexto variant="text">Vendas</ButtonTexto>
              </Link>
            </Item>
            <Item>
              <Link to="/servicos">
                <ButtonTexto variant="text">Serviços</ButtonTexto>
              </Link>
            </Item>
            <Item>
              <Link to="/sobre">
                <ButtonTexto variant="text">Sobre</ButtonTexto>
              </Link>
            </Item>
            <Item>
              <Link to="contato">
                <ButtonTexto variant="text">Contato</ButtonTexto>
              </Link>
            </Item>
          </Stack>
        </div>
        <div>
          <Typography
            sx={{ fontSize: 20, mb: 1, color: "#ECB365" }}
            variant="h5"
            component="div"
          >
            Seja o primeiro a ver as novidades
          </Typography>
          <Typography
            sx={{ fontSize: 10, mb: 3, color: "#ECB365" }}
            color="text.secondary"
            textAlign="justify"
          >
            Cadastre seu e-mail e receba novidades e promoções disponíveis!
          </Typography>

          <Box
            action="https://api.staticforms.xyz/submit"
            method="post"
            component="form"
            onSubmit={handleSubmit}
          >
            <Stack direction="row" spacing={1}>
              <input
                type="hidden"
                name="accessKey"
                value="262c1e21-f984-469e-b2fd-b97bd680cb84"
              />

              <Item>
                <input
                  id="newsletter1"
                  type="text"
                  name="email"
                  class="form-control"
                  placeholder="Endereço de email"
                  onChange={handleChange}
                  value={contact.email}
                  required
                />
              </Item>
              <Item>
                <button type="submit" className="buttonPadrao">
                  Cadastrar
                </button>
              </Item>
            </Stack>
          </Box>
        </div>
      </Box>

      <Container maxWidth="lg">
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
