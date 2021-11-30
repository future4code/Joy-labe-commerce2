import React from "react";
import styled from "styled-components";
import Filtros from "./Filtros"
import CardProduto from "./CardProduto"


const listaDeProdutos = [
  {
    id: 1,
    name: "Foguete da Missão Apollo 11",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  },

  {
    id: 2,
    name: "Foguete da Missão Apollo 15",
    value: 20000.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 2,
    name: "Foguete da Missão Apollo 15",
    value: 20000.0,
    imageUrl: "https://picsum.photos/200/200",
  }

]


const BarraInformacoes = styled.div` 
display: flex;
background-color: pink;
justify-content: space-around;
`
const ContainerHome = styled.div` 
/* height:100vh; */
width: 60%;
margin: auto;
`

const ContainerProdutos = styled.div` 
flex-grow: 1;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
row-gap: 10px;
column-gap: 10px;
margin: 10px;
`



class Home extends React.Component {

  state={
    produtos: listaDeProdutos,
  }

  render() {
    const componentesProdutos = this.state.produtos.map((produto) => {
      return (
        <CardProduto
            imageUrl={produto.imageUrl}
            descricaoProduto={produto.name}
            valorProduto={produto.value}
          />
      )
    })
    return (

      <ContainerHome>
        <BarraInformacoes>
          <p>Quantidade de produtos: 2</p>
          <Filtros
            descricao={"Ordenação"}
            opcoes={[
              "Crescente",
              "Decrescente"
            ]}
          />
        </BarraInformacoes>

        <ContainerProdutos>

          {componentesProdutos}


        </ContainerProdutos>

      </ContainerHome>
    )
  }
}

export default Home