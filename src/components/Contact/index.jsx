import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function BasicGrid() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "Services Connections - Formulário de contato",
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
        toast.success("Mensagem enviada com sucesso!");
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
    setContact({ name: "", email: "", message: "" });
  };

  return (
    <Box
      action="https://api.staticforms.xyz/submit"
      method="post"
      component="form"
      onSubmit={handleSubmit}
      sx={{ flexGrow: 1 }}
    >
      <input
        type="hidden"
        name="accessKey"
        value="262c1e21-f984-469e-b2fd-b97bd680cb84"
      />
      <input
        type="hidden"
        name="redirectTo"
        value="http://localhost:3000/contato"
      />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Item>
            <h2>Contate-nos</h2>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <p>
              Para mais perguntas, incluindo oportunidades de parceria, envie um
              e-mail para ncls.braga19@gmail.com ou entre em contato usando
              nosso formulário.
            </p>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <TextField
              name="name"
              id="standard-basic"
              label="Nome Completo"
              variant="standard"
              type="text"
              onChange={handleChange}
              value={contact.name}
              required
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <TextField
              name="email"
              id="standard-basic"
              label="E-mail"
              variant="standard"
              type="email"
              onChange={handleChange}
              value={contact.email}
              required
            />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <TextField
              name="message"
              fullWidth
              id="standard-multiline-static"
              label="
              O que podemos ajudá-lo?"
              multiline
              rows={4}
              variant="standard"
              type="text"
              onChange={handleChange}
              value={contact.message}
              required
            />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
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
              variant="text"
              type="submit"
            >
              Enviar Mensagem
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#000000",
  boxShadow: "none",
}));
