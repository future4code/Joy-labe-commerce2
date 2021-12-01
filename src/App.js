import React from 'react'
import styled from 'styled-components'
import CheckBox from 'react'

class Filtro extends React.Component {

  state = {
    listaDePodutos : [ 
    { 
      id: 1,
      name: "Foguete da Missão Apollo 11",
      categoria: " camisa e estampa",
      valor: 10000.0,
      imageUrl: "https://picsum.photos/200/200"
    },
    { 
      valorInputId: "",
      valorInputName: "",
      valorInputCategoria: "",
      valorInputValue: ""
      
    }
  ]
}


adicionaDados = () => {
  const novosProdutos = {

           nome: this.state.valorInputId,
           idade: this.state.valorInputName,
           email: this.state.valorInputCategoria,
           valores: this.state.valorInputValue
}


const novosProdutosAdicionados = [ ...this.state.listaDePodutos, novosProdutos];
this.setState({listaDePodutos : novosProdutosAdicionados})




const [users, setUsers] = useState ([])
useEffect(() => {

setUsers(listaDePodutos);
} ,[]);
}


mudaId= (event) => {
  this.setState({ valorInputId: event.target.value });
};

mudaName = (event) => {
  this.setState({ valorInputName: event.target.value });
};

mudaCategoria = (event) => {
  this.setState({ valorInputCategoria: event.target.value });
};

mudaValue = (event) => {
  this.setState({ valorInputValue: event.target.value });
};


render() {
 

        
    return (
         
      <div>
          <form>
  
          <label>nome: </label>
          <input type = "text" value={this.state.name} onChange={this.mudaName} />
  
          
  
          <label>Categoria
          <select value={this.state.categoria} onChange={this.mudaCategoria} >
          <option value = "Todas as categorias">Todas as categorias </option>
          <option value="Roupas espaciais"> Roupas espaciais </option>
          <option value = "Camisetas com estampas divertidas do espaço">Camisetas com estampas divertidas do espaço </option>
          <option value = "Brinquedos com tema espacial">Brinquedos com tema espacial</option>
         
      </select>  
</label>
{users.map((user) =>(
<div className = "form- check">

<input type = "checkbox"  className= "form- check -input" /> 


</div>


))}

   
      

       
      
      
       <button onClick={this.enviar}>Enviar </button> 


      </form>

    </div>
  );
}

}

  
export default Filtro;