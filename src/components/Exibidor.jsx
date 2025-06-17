import React from "react"
import styled from "styled-components"
import SalvarCarrinho from "../functions/SalvarCarrinho"

const Modelo = styled.div`
    background: #fff;
    border-radius: 24px;
    display: flex;
    margin: 32px 0;
    overflow: hidden;
    box-shadow: 60px -16px #dadada;

    button {
        background-color: #3a3a3a;
        border-radius: 12px;
        size: 56px;
        padding:15px;
        color: #eee;
        border-radius:10px; 
    }

    button:hover {
      background-color: #2b2b2e;
      transition: 0.3s;
    }
`

const ModeloImagens = styled.div`
    display: flex;
    overflow-x: scroll;
    max-width: 560px;
`

const ModeloDados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
`

export default function Exibidor(props) {

    return props.produto ?
        <Modelo>

            <ModeloImagens>
                <img src={ props.produto.imagens[0] } alt="foto 1 produto" height={450}/>
                <img src={ props.produto.imagens[1] } alt="foto 2 produto" height={450}/>
                <img src={ props.produto.imagens[2] } alt="foto 3 produto" height={450}/>
            </ModeloImagens>

            <ModeloDados>
                <div> { props.produto.marca } </div>
                <div> { props.produto.modelo } </div>
                <div> R$ { props.produto.preco },00 </div>
                <div> { props.produto.descricao } </div>
                <button onClick={ () => SalvarCarrinho(props.produto.codigo) }> 
                    Adicionar ao Carrinho 
                </button>
            </ModeloDados>

        </Modelo>
    :
        <Modelo>
            <ModeloDados> NFT não encontrada no estoque! </ModeloDados>
        </Modelo>
}