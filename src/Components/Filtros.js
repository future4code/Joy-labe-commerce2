import React from "react"
import styled from "styled-components"

const ContainerFiltro = styled.div ` 
display: flex;
justify-content: space-around;
align-items: center;
width: 190px;
`


export default function Filtros(props) {

  return (
    <ContainerFiltro>
      <p>{props.descricao}</p>
      <select>
        {props.opcoes.map(opcao => (
          <option value={opcao} > {opcao}</option>
        ))}
      </select>
    </ContainerFiltro>
  )

}