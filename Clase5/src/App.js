import React, { Component } from 'react';
import './App.css';
import Listado from './components/listado/listadoC'

const Inicio = () => <h1>Inicio</h1>
class App extends Component {
  render() {
    return (
      <div>
         <Listado/>
      </div>
    );
  }
}

export default App;
/*<MenuContainer/>
<Switch>
  <Route exact path='/inicio' component={Inicio}/>
  <Route exact path='/history' component={History}/>
  <Route path='/home' component={Home}/>
  
  <Redirec*/