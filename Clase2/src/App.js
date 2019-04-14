import React, { Component } from 'react';
//import './App.css';
import Saludar from './components/Saludar';
import Sumar from './components/Sumar';
 
//const saludar = () => <h3>Saludo al mundo</h3>

class App extends Component {
  pasarDato = (e) => {
    this.dia = Date();
    console.log(e);
  }

  getSuma = resultado => {
     console.log("Resultado: "+resultado);
  }

  render() {
    return (
      <div>
        <Sumar numUno={2} numDos={8} getSuma={this.getSuma}/>
        <Saludar nombre="Julian" onEventoPadre={this.pasarDato}/>
        <button onClick={this.pasarDato}>Evento pasarDato</button>
      </div>
    );
  }
}

export default App;
