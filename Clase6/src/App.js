import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/MenuContainer';

const Inicio = () => <h1>Inicio</h1>

class App extends Component {
  render() {
    return (
      <Menu/>
    );
  }
}

export default App;

/*<Contenedor>
<h1>Hola Contenedor</h1>
<Boton/>
</Contenedor>*/
/*
import Boton from './components/boton/BotonC';
import { Btn } from "./components/utils/index";
import Contenedor from "./components/Contenedor/Contenedor";*/