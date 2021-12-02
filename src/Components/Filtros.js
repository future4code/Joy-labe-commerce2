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
      <select 
      name="ordem"
      value={props.ordem}
      onChange={props.upDateOrdem}>

<option value={1}>Crescente</option> 
<option value={2}>Decrescente</option> 
        {/* {props.opcoes.map(opcao => (
          <option value={opcao} > {opcao}</option>
        ))} */}
      </select>
    </ContainerFiltro>
  )

}