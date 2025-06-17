import React from "react"
import styled from "styled-components"
import Navegacao from "../components/Navegacao"

const Modelofoto = styled.div`
    left: 100px;
    top: 10px;
    padding: 52px 328px;
    height: 240px;
    width: 240px;
`
const ModeloPerfil = styled.div`
    font-size: 32pt;
    font-style: italic;
    font-weight: bolder;
    padding: 20px 0;
    text-align: center;
`
const ModelotxtPerfil = styled.div`
    font-size: 28pt;
    font-style: italic;
    font-weight: normal;
    padding: 20px 0;
    text-align: center;
`


export default function Perfil ( ){

    return <>
        <Navegacao/>
        <ModeloPerfil> Perfil </ModeloPerfil>
        <Modelofoto> <img src="/user.png" height={ 242 }/> </Modelofoto>
        <ModelotxtPerfil> Teuzokas 🖊</ModelotxtPerfil>
    
    </>
}