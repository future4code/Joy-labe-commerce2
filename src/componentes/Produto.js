import React from 'react';
import Styled from 'styled-components';
import Carrinho from './Carrinho';

const ContainerProduto = Styled.div`
    display: flex;
    flex-direction: column;
    border: solid 1px black;
    width: 200px;
    height: 350px;
`

export default class Produto extends React.Component{

    state = {
        produtos: [
            {
                id: Date.now(),
                name: "Camiseta Astrobot",
                value: 99.90,
                imageUrl: "https://picsum.photos/200/200"
            }
        ]
    }

    adicionarProdutoAoCarrinho = () => {
    }

    containerImagemProduto = this.state.produtos.map(produto =>{
        return (
            <div>
                <p>{produto.name}</p>
                <p>{produto.value}</p>
                <img src={produto.imageUrl} alt={"imagemTeste"}/>
            </div>
        )
    })

    render(){
        return(
            <ContainerProduto>
                {this.containerImagemProduto}
                <button onClick={this.adicionarProdutoAoCarrinho}>Adicionar ao carrinho</button>
            </ContainerProduto>
        )
    }
}