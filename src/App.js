import React from "react";
import styled from "styled-components";
import CardProduto from "./Components/CardProduto";
import barbieAstronauta from "./barbie-astronauta.jpg"
import estacaoEspacial from "./estacao-espacial.jpeg"
import onibusEspacial from "./onibus-espacial.jpg"
import ursinhoAstronauta from "./ursinho-astronauta.jpg"
import camiseta1 from "./camiseta1.jpg"
import camiseta3 from "./camiseta3.jpg"
import camiseta4 from "./camiseta4.jpg"
import macacaoAstronauta from "./macacao-astronauta.jpeg"
import capaceteAstronauta from "./capacete-astronauta.jpg"
import kitAstronauta from "./kit-astronauta.jpg"

const listaDeProdutos = [
  //brinquedos
  {
    id: 1,
    name: "Barbie Astronauta",
    valor: 99.99,
    imageUrl: barbieAstronauta,
    categoria: "Brinquedos com tema espacial"
  },

  {
    id: 2,
    name: "Estação Espacial",
    valor: 200.10,
    imageUrl: estacaoEspacial,
    categoria: "Brinquedos com tema espacial"
  },
  {
    id: 3,
    name: "Ônibus Espacial",
    valor: 200.60,
    imageUrl: onibusEspacial,
    categoria: "Brinquedos com tema espacial"
  },
  {
    id: 4,
    name: "Ursinho Astronauta",
    valor: 20000,
    imageUrl: ursinhoAstronauta,
    categoria: "Brinquedos com tema espacial"
  },
  //camisetas com estampa
  {
    id: 5,
    name: "Camiseta estampa astronauta",
    valor: 300.50,
    imageUrl: camiseta1,
    categoria: "Camisetas com estampas divertidas do espaço"
  },
  {
    id: 6,
    name: "Camiseta estampa nasa",
    valor: 90.50,
    imageUrl: camiseta3,
    categoria: "Camisetas com estampas divertidas do espaço"
  },
  {
    id: 7,
    name: "Camiseta estampa balões planetas",
    valor: 100.50,
    imageUrl: camiseta4,
    categoria: "Camisetas com estampas divertidas do espaço"
  },

  //roupas espaciais
  {
    id: 8,
    name: "Macacão Astronauta",
    valor: 100.50,
    imageUrl: macacaoAstronauta,
    categoria: "Roupas espaciais"
  },

  {
    id: 9,
    name: "Capacete de astronauta",
    valor: 100.50,
    imageUrl: capaceteAstronauta,
    categoria: "Roupas espaciais"
  },

  {
    id: 10,
    name: "Kit de Astronauta",
    valor: 230.50,
    imageUrl: kitAstronauta,
    categoria: "Roupas espaciais"
  },


]

const BarraInformacoes = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;  
  font-size: 1.25em;
`;
const ContainerHome = styled.div`
  /* height:100vh; */
  width: 90%;
  margin: auto;
`;

const ContainerProdutos = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;
`;

const ContainerFiltros = styled.div` 
display: flex;
flex-direction: column;
padding: 20px;
`

const Container = styled.div` 
width: 100%;
display: grid;
grid-template-columns: 1fr 3fr 1fr;

`

const CampoOrdenacao = styled.div` 
display: flex;
justify-content: space-between;
width: 40%;
`

const CampoInput = styled.div` 
display: flex;
flex-direction: column;
height: 90px;
justify-content: space-around;
margin: 30px;
font-size: 1.25em;

`

const Input = styled.input ` 
padding: 10px;
border-radius: 5px;
border: red;
margin-top: 10px;
background-color: #D0D3D9;
color: black;
`

class App extends React.Component {
  state = {
    produtos: listaDeProdutos,
    query: "",
    precoMinimo: "",
    precoMaximo: "",
    classificacaoCategoria: "",
    order: 1,
    sortingParamater: "name"

  };

  upDateQuery = (event) => {
    this.setState({ query: event.target.value });
  };

  upDatePrecoMaximo = (event) => {
    this.setState({ precoMaximo: event.target.value });
  };

  upDatePrecoMinimo = (event) => {
    this.setState({ precoMinimo: event.target.value });
  };

  upDateCategoria = (event) => {
    this.setState({ classificacaoCategoria: event.target.value })
  }

  upDateOrder = (event) => {
    this.setState({ order: event.target.value })
  }

  upDateSortingParamater = (event) => {
    this.setState({ sortingParamater: event.target.value })
  }
  render() {

    const componentesProdutos = this.state.produtos
      .filter((produto) => {
        return produto.name
          .toLowerCase()
          .includes(this.state.query.toLocaleLowerCase());
      })
      .filter((produto) => {
        return this.state.precoMinimo === "" || produto.valor >= this.state.precoMinimo
      })
      .filter((produto) => {
        return this.state.precoMaximo === "" || produto.valor <= this.state.precoMaximo
      })
      .filter((produto) => {
        return this.state.classificacaoCategoria === "Todas as categorias" || produto.categoria
          .includes(this.state.classificacaoCategoria)
      })
      .sort((produtoAtual, proximoProduto) => {
        switch (this.state.sortingParamater) {
          case "name":
            return this.state.order * produtoAtual.name.localeCompare(proximoProduto.name)
          default:
            return this.state.order * produtoAtual.valor - proximoProduto.valor
        }
      })
      .map((produto) => {
        return (
          <CardProduto
            key={produto.id}
            imageUrl={produto.imageUrl}
            descricaoProduto={produto.name}
            valorProduto={produto.valor}
          />
        );
      });
    return (

      <Container>
        <ContainerFiltros>
          <h1>Busca</h1>

          <CampoInput>
            <label>Nome do produto</label>
            <Input
              placeholder="Pesquisa"
              value={this.state.query}
              onChange={this.upDateQuery}
            />
          </CampoInput>

          <CampoInput>
            <label>Preço do produto</label>
            <Input
              placeholder="Preço max."
              value={this.state.precoMaximo}
              onChange={this.upDatePrecoMaximo}
            />

            <Input
              placeholder="Preço min."
              value={this.state.precoMinimo}
              onChange={this.upDatePrecoMinimo}
            />
          </CampoInput>

          <CampoInput>
            <label>Categoria</label>
            <select
              name="classificacaoCategoria"
              value={this.state.classificacaoCategoria}
              onChange={this.upDateCategoria}>
              <option value="Todas as categorias">Todas as categorias </option>
              <option value="Roupas espaciais"> Roupas espaciais </option>
              <option value="Camisetas com estampas divertidas do espaço">Camisetas com estampas divertidas do espaço </option>
              <option value="Brinquedos com tema espacial">Brinquedos com tema espacial</option>

            </select>
          </CampoInput>




        </ContainerFiltros>
        <ContainerHome>
          <BarraInformacoes>
            <p>Quantidade de produtos: {componentesProdutos.length}</p>

            <CampoOrdenacao>
              <label>Ordenar por</label>

              <select
                name="sortingParamater"
                value={this.state.sortingParamater}
                onChange={this.upDateSortingParamater}>
                <option value="name">Produto</option>
                <option value="valor"> Preço </option>

              </select>

              <select
                name="order"
                value={this.state.order}
                onChange={this.upDateOrder}>
                <option value={1}>Crescente </option>
                <option value={-1}> Decrescente </option>


              </select>

            </CampoOrdenacao>


            {/* <Filtros
            descricao={"Ordenação"}
          /> */}
          </BarraInformacoes>

          <ContainerProdutos>{componentesProdutos}</ContainerProdutos>
        </ContainerHome>
        <ContainerFiltros>
          <h1>Carrinho</h1>

        </ContainerFiltros>

      </Container>
    );
  }
}

export default App;
