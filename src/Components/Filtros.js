import React from "react"

export default function Filtros(props) {

  return (
    <div>
      <p>{props.descricao}</p>
      <select>
        {props.opcoes.map(opcao => (
          <option value={opcao} > {opcao}</option>
        ))}
      </select>
    </div>
  )

}