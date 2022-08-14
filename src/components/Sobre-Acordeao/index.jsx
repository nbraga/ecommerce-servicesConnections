import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  color: "black",
  border: `5px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "2rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  background: "#f1f1f1",
  color: "black",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Como posso fazer parte do Projeto #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            É muito fácil, basta você entrar em contato com a equipe,
            preenchendo o formulário na opção "CONTATO" e detalhar que tipo de
            serviço ou venda você deseja adicionar ao site, a equipe irá tratar
            de todos os acordos e assuntos relacionados.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Qual o valor para participar do Projeto? #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Como estamos iniciando e sabemos das dificuldades que estão surgindo
            na nossa cidade, não estamos cobrando mensalidade, mas a cada venda
            ou serviço realizado atráves da plataforma, estipulamos um valor de
            10% sob o serviço ou produto, sendo assim de 100$, lucramos 10$.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            Qual a quantidade máxima de produtos ou serviços posso adicionar ao
            site? #3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ao entrar em contato com a equipe, você pode enviar o que quiser,
            mas lembrando que todas informações devem ser repassadas, por um
            exemplo. um produto, tem valor, descrição e outros atributos, todos
            eles devem ser detalhados, para não haver nenhuma falha na
            comunicação.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
