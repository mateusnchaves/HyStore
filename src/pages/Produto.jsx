import React from "react"
import { useParams } from "react-router-dom"

import Exemplo from "../datas/Exemplos"
import ExemploCoins from "../datas/ExemplosCoins"
import ExemploTrend from "../datas/ExemplosTrend"
import Nft from "../datas/Nfts"

import CryptoMoedas from "../pages/CryptoMoedas"

import Navegacao from "../components/Navegacao"
import Exibidor from "../components/Exibidor"

export default function Produto() {

    const { codigo } = useParams()
    
    return <>
        <Navegacao/>

        <Exibidor produto={

            Exemplo.find((produto) => produto.codigo == codigo) ||

            ExemploCoins.find((produto) => produto.codigo == codigo) ||

            Nft.find((produto) => produto.codigo == codigo) ||

            ExemploTrend.find((produto) => produto.codigo == codigo)
        }/>

    </>
}

