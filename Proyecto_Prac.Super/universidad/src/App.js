import React, { Component } from 'react';
import './App.css';
import { Route, Switch,Redirect} from 'react-router-dom';
import Home from './components/home/home/Home';
import History from './components/home/history/History';
import Error from './components/error/Error'
import MenuContainer from './components/menu/MenuContainer';
//<Route component={Error}/>
const Inicio = () => <h1>Inicio</h1>
class App extends Component {
  render() {
    return (
      <div>
            <MenuContainer/>
            <Switch>
              <Route exact path='/inicio' component={Inicio}/>
              <Route exact path='/history' component={History}/>
              <Route path='/home' component={Home}/>
              
              <Redirect to='/inicio'/>
            </Switch>
      </div>
    );
  }
}

export default App;
