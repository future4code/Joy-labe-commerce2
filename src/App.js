import React from 'react';
import Styled from 'styled-components';
import Carrinho from './componentes/Carrinho';
import Produto from './componentes/Produto';

const ContainerApp = Styled.div`
  display: flex;
  justify-content: space-around;
`

export default class App extends React.Component{
  render(){
    return(
      <ContainerApp>
        <Produto/>
        <Carrinho/>
      </ContainerApp>
    )
  }
}