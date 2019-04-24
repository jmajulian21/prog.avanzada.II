import React, { Component } from 'react';
import './App.css';
import Boton from './components/boton/BotonC';
import { Btn } from "./components/utils/index";
import Contenedor from "./components/Contenedor/Contenedor";

const Inicio = () => <h1>Inicio</h1>

class App extends Component {
  render() {
    return (
      <div>
        
        <Contenedor
        color="blue"
        >
          <h1>Hola Contenedor</h1>
          <Boton/>
        </Contenedor>
      </div>
    );
  }
}

export default App;

/*
import { Route, Switch,Redirect} from 'react-router-dom';
import Home from './components/home/home/Home';
import History from './components/home/history/History';
import Error from './components/error/Error'
import MenuContainer from './components/menu/MenuContainer';
            <MenuContainer/>
            <Switch>
              <Route exact path='/inicio' component={Inicio}/>
              <Route exact path='/history' component={History}/>
              <Route path='/home' component={Home}/>
              
              <Redirect to='/inicio'/>
            </Switch>*/