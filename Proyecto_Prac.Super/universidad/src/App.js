import React, { Component } from 'react';
import './App.css';
import MenuContainer from './components/menu/MenuContainer';
import Urls from './components/utils/urls/urls';

class App extends Component {
  login(tipo_usuario) {
    
  }
  render() {
    return (
      <div>
          <Urls />
          <MenuContainer />
      </div>
    );
  }
}
//<Login />
export default App;