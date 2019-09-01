import React, { Component } from 'react';
import './App.css';
import MenuContainer from './components/menu/MenuContainer';
import Urls from './components/utils/urls/urls';

class App extends Component {
  render() {
    return (
      <div>
          <MenuContainer />
          <Urls />
      </div>
    );
  }
}
//<Login />
export default App;