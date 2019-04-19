import React, { Component } from 'react';
//import './App.css';
import Saludar from './components/Saludar';
import Sumar from './components/Sumar';
 
//const saludar = () => <h3>Saludo al mundo</h3>

class App extends Component {

  getResultado = resultado => {
     console.log("Resultado: "+resultado);
  }

  render() {
    return (
      <div>
        <Operacion getResultado={this.getResultado}/>
      </div>
    );
  }
}

export default App;
