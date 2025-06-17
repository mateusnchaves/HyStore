import React, { useState, useEffect } from "react"

import ObterCarrinho from "../functions/ObterCarrinho"

import Exemplos from "../datas/Exemplos"

import Navegacao from "../components/Navegacao"
import Janela from "../components/Janela"


export default function Carrinho() {

    const [ carrinho, definirCarrinho ] = useState([])
    const [ preco, definirPreco ] = useState(0.01)

    useEffect(function() {

        const resultado = ObterCarrinho()

        definirCarrinho(resultado)

        console.log(carrinho)

    }, [])

    useEffect(function() {

        var total = 0.01

        carrinho.map(function(codigo) {

            for (const produto of Exemplos) {

                if (produto.codigo == codigo) {

                    total += parseInt(produto.preco)

                }

            } 

        })

        definirPreco(total)

    }, [ carrinho ])

    return <>
        
        <Navegacao/>
    
            <Janela>

                <table width="100%">
                    <thead>
                        <tr>
                            <td> Código </td>
                            <td> Modelo Produto </td>
                            <td> Valor </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carrinho.map(function(codigo, indice) {
                                
                                for (const produto of Exemplos) {
                                    if (produto.codigo == codigo ) {

                                        return <tr key={ indice }>
                                            <td> {produto.codigo} </td>
                                            <td> {produto.modelo} </td>
                                            <td> R${produto.preco},00 </td>
                                        </tr>

                                    }

                                }

                            })
                        }
                    </tbody>
                </table>

                <h1> Total: R$ { preco }</h1>

                <button onClick={() => alert("CHAVE PIX: 11987831437") }>
                        Pagamento por pix
                </button>
                

            </Janela>
    
    </>

}