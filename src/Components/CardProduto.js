import React from "react"
import styled from "styled-components"

const ImagemCard = styled.img` 
width: 100%;
height: 200px;
margin: auto;
`

const CardDoProduto = styled.div ` 
display: flex;
flex-direction: column;
justify-content: center;
background-color: yellow;
text-align: center;
border: 1px solid black;
`

const BotaoAdicionar = styled.button ` 
margin: 10px;
`

export default function CardProduto(props) {
  return (
    <CardDoProduto>
            <ImagemCard src={props.imageUrl}/>
            <p>{props.descricaoProduto}</p>
            <p>{props.valorProduto}</p>
            <BotaoAdicionar>Adicionar ao carrinho</BotaoAdicionar>
    </CardDoProduto>

  )
}