import React, { useState } from "react"
import styled from "styled-components"
import Gradient from "javascript-color-gradient"

const Modelo = styled.div`
    overflow: hidden;
`

const ModeloTitulo = styled.div`
    font-size: 26pt;
    font-style: italic;
    font-weight: bold;
    padding: 16px 0;
    left: 100px;
    position: absolute;
    top: 2px;
`

const ModeloLogo = styled.div`
    font-size: 26pt;
    font-style: italic;
    font-weight: bold;
    padding: 16px 0;
    left: 32px;
    position: absolute;
    top: 2px;
`

const ModeloSubtitulo = styled.div`
    font-size: 32pt;
    font-style: italic;
    font-weight: normal;
    padding: 104px 0;
    text-align: center;
`

const Modelotp = styled.div`
    font-size: 32pt;
    font-style: italic;
    font-weight: normal;
    padding: 104px 0;
    text-align: center;
`

const ModeloLinks = styled.div`
    display: flex;
    gap: 16px;
    justify-content: center;
`

const MenuInterativo = styled.div`
    background: #333333;
    width: ${
        props => props.mostrar ? "320px" : "0"
    };
    min-height: 100vh;
    left: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    transition: 0.28s;
`

const MenuItem = styled.a`
    background: #555555;
    border-radius: 12px;
    display: block;
    color: #fff;
    margin: 16px;
    padding: 8px 32px;
`

const MenuBotao = styled.button`
    background: #3a3a3a;
    border-radius: 12px;
    border: none;
    color: #fff;
    right: 32px;
    padding: 16px;
    position: absolute;
    top: 20px;
`

const SearchBox = styled.input`
    background: #3a3a3a;
    border-radius: 100%;
    color: #fff;
    height: 52px;
    right: 96px;
    position: absolute;
    text-align: center;
    top: 20px;
    transition: .2s;
    width: 52px;

    &:focus {
        border-radius: 120px;
        transition: .2s;
        width: 256px;
    }
`


export default function Navegacao() {

    const [ mostrar, definirMostrar ] = useState(false)

    function AlternarMostrar() {
        definirMostrar(!mostrar)
    }

    return <Modelo>

        <ModeloLogo> 
            
            <img src="/favicon.png" height={ 52 }/>

        </ModeloLogo>

        <ModeloTitulo> Hystore </ModeloTitulo>

        <ModeloSubtitulo> Explore, collect, and sell NFTs </ModeloSubtitulo>

        <MenuBotao onClick={ AlternarMostrar }> ☰ </MenuBotao>

        <SearchBox placeholder="🔎"/>

        <MenuInterativo mostrar={ mostrar }>

            <MenuItem href="/"> 🏠 Inicio </MenuItem>
            <MenuItem href="/promocao"> 📈 Promocao </MenuItem>
            <MenuItem href="/cryptomoedas"> 💱 Cryptomoedas </MenuItem>
            <MenuItem href="/perfil"> 👤 Perfil </MenuItem>
            <MenuItem href="/carrinho"> 🛒 Carrinho </MenuItem>
            <MenuItem href="#" onClick={ AlternarMostrar }> ❌ </MenuItem>

        </MenuInterativo>

    </Modelo>
}
