import React from "react"
import styled from "styled-components"

const Modelo = styled.div`
    background: white;
    margin: 32px 0;
    overflow: hidden;
    border-radius: 24px;
    box-shadow: 3px 3px gray, -1em 0 0.4em darkgrey;

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

const ModeloInterno = styled.div`
    padding: 32px;
`

export default function Janela(props) {

    return <Modelo>
        <ModeloInterno>

            { props.children }

        </ModeloInterno>

    </Modelo>

}
