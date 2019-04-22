import React, { Component } from 'react';
import './App.css';
import Operacion from './components/operacion/operacionContainer'; 
//const saludar = () => <h3>Saludo al mundo</h3>

class App extends Component {

  getResultado = resultado => {
     console.log("Resultado: "+resultado);
  }

  render() {
    return (
      <div>
        <Operacion/>
      </div>
    );
  }
}

export default App;
