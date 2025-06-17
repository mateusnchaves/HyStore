import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ReactDOM from "react-dom";

import Inicio from "./pages/Inicio"
import Produto from "./pages/Produto"
import Promocao from "./pages/Promocao"
import Carrinho from "./pages/Carrinho"
import CryptoMoedas from "./pages/CryptoMoedas"
import Perfil from "./pages/Perfil"

export default function Rotas() {

    return <BrowserRouter>
        <Routes>

            <Route index path="/" element={ <Inicio/> }/>
            
            <Route path="/produto/:codigo" element={ <Produto/> }/>

            <Route path="/promocao" element={ <Promocao/> }/>

            <Route path="/carrinho" element={ <Carrinho/> }/>

            <Route path="/cryptomoedas" element={ <CryptoMoedas/> }/>

            <Route path="/perfil" element={ <Perfil/> }/>
            
        </Routes>
    </BrowserRouter>
}