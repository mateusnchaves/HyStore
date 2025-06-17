import React from "react"
import styled from "styled-components"

import ExemplosCoins from "../datas/ExemplosCoins"
import Navegacao from "../components/Navegacao"
import Principal from "../components/Principal"
import ExemplosTrends from "../datas/ExemplosTrend"

const ModeloSubtitulo = styled.div`
    font-size: 32pt;
    font-style: italic;
    font-weight: normal;
    padding: 104px 0;
    text-align: center;
`

const ModeloBarratitulo = styled.div`
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

const ModeloBarrasubtitulo = styled.div`
    font-size: 18pt;
    font-style: italic;
    font-weight: normal;
    color: #eee;
    text-align: right;
    background: #3a3a3a;
`

export default function Inicio() {

    return <>
        <Navegacao/>
        <Principal catalogo={ ExemplosCoins }/>
        <ModeloBarratitulo>ㅤExplore collectionsㅤㅤㅤ
            <ModeloBarrasubtitulo>ㅤ‖ㅤbrowse and find in the new marketplaceㅤㅤ</ModeloBarrasubtitulo>
        </ModeloBarratitulo>
        <ModeloSubtitulo>———— Trending CryptoCoins ————</ModeloSubtitulo>
        <Principal catalogo={ ExemplosTrends }/>
    </>
}