import React from 'react';
import Styled from 'styled-components'
import Produto from './Produto';

const ContainerCarrinho = Styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 100vh;
    border: solid 1px black;
    text-align: center;
`

export default class Carrinho extends React.Component{ 
    

    render(){

        return(
            <ContainerCarrinho>
                <h3>Carrinho</h3>
            </ContainerCarrinho>
        )
    }
}