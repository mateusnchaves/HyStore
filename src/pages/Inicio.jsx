import React from "react"
import styled from "styled-components"

import Navegacao from "../components/Navegacao"
import Principal from "../components/Principal"

import Exemplos from "../datas/Exemplos"

import Nfts from "../datas/Nfts"

import Footer from "../datas/Footer"

const ModeloSubtitulo = styled.div`
    font-size: 24pt;
    font-style: italic;
    font-weight: bold;
    padding: 38px 0px;
    color: #eee;
    text-align: left;
    background: #3a3a3a;
    position: relative;
    border-radius: 8px;
    box-shadow: 2px 3px 2px 3px rgba(0, 0, 0, 0.2);
`

const ModeloSubbtitulo = styled.div`
    font-size: 18pt;
    font-style: italic;
    font-weight: normal;
    color: #eee;
    text-align: right;
    background: #3a3a3a;
`
const ModeloEnd = styled.div`
    background: #3a3a3a;
    color: #eee;
    text-align: center;
`

const ModeloFooter = styled.div`
    background: #3a3a3a;
    box-shadow: 30px -12px #555454;
    display: flex;
    height: auto;
    box-sizing: border-box;
    margin: 0 auto;
    width: 900px;
    border-radius: 16px;
    text-align: center;
    align-items: center;
    font-size: 18pt;
    font-style: italic;
    font-weight: normal;
    color: #eee;
`

export default function Inicio() {

    return <>
        <Navegacao/>
        <Principal catalogo={ Exemplos }/>
        <ModeloSubtitulo>ㅤBuy on Hystore ©
            <ModeloSubbtitulo>| Browse and build your collection of the world’s most cutting-edge digital artㅤ</ModeloSubbtitulo>  </ModeloSubtitulo>
        <Principal catalogo={ Nfts }/>
        <ModeloFooter>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤHystore © <Footer/> </ModeloFooter>
    </>
}