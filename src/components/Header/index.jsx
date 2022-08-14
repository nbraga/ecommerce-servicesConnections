import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#ECB365",
  background: "none",
  boxShadow: "none",
}));

const ButtonTexto = styled(Button)({
  color: "#ECB365",
  background: "none",
  textTransform: "capitalize",
});

export default function ButtonAppBar() {
  const matches = useMediaQuery("(min-width:600px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        {matches ? (
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#06113C",
            }}
          >
            <Link to="/">
              <img src={logo} alt="Logo" width={40} />
            </Link>

            <Stack direction="row" spacing={2}>
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
                <Link to="/contato">
                  <button className="buttonPadrao" type="button">
                    Contato
                  </button>
                </Link>
              </Item>
            </Stack>
          </Toolbar>
        ) : (
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#06113C",
            }}
          >
            <div>
              <Link to="/">
                <img src={logo} alt="Logo" width={40} />
              </Link>

              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuIcon />
              </Button>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <Stack
                  spacing={1}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Link to="/vendas">
                    <MenuItem
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        justifyContent: "center",
                        color: "white",
                        backgroundColor: "#E16C06",
                        ":hover": {
                          backgroundColor: "#bf360c",
                          borderColor: "#0062cc",
                          boxShadow: "none",
                          color: "white",
                        },
                      }}
                      onClick={handleClose}
                    >
                      <span>Vendas</span>
                    </MenuItem>
                  </Link>
                  <Link to="/servicos">
                    <MenuItem
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        justifyContent: "center",
                        color: "white",
                        backgroundColor: "#E16C06",
                        ":hover": {
                          backgroundColor: "#bf360c",
                          borderColor: "#0062cc",
                          boxShadow: "none",
                          color: "white",
                        },
                      }}
                      onClick={handleClose}
                    >
                      <span>Serviços</span>
                    </MenuItem>
                  </Link>
                  <Link to="/sobre">
                    <MenuItem
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        justifyContent: "center",
                        color: "white",
                        backgroundColor: "#E16C06",
                        ":hover": {
                          backgroundColor: "#bf360c",
                          borderColor: "#0062cc",
                          boxShadow: "none",
                          color: "white",
                        },
                      }}
                      onClick={handleClose}
                    >
                      <span>Sobre</span>
                    </MenuItem>
                  </Link>
                </Stack>
              </Menu>
            </div>

            <Link to="/contato">
              <button className="buttonPadrao" type="button">
                Contato
              </button>
            </Link>
          </Toolbar>
        )}
      </AppBar>
    </Box>
  );
}
