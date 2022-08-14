import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Vendas from "./pages/Vendas";
import Servicos from "./pages/Servicos";

import Footer from "./components/Footer";
import Header from "./components/Header";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/servicos" element={<Servicos />} />
        {/* <Route path="/teste" element={<Teste />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Rotas;
