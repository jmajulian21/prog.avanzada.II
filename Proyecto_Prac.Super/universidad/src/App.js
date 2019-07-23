import React, { Component } from 'react';
import './App.css';
import MenuContainer from './components/menu/MenuContainer';
import Urls from './components/utils/urls/urls';
import Login from './components/login/loginC';
import { AuthProvider } from './components/login/context/AuthProvider'

class App extends Component {



  render() {
    return (
      <AuthProvider>
        <MenuContainer />
        <Urls />
        <Login />
      </AuthProvider>
    );
  }
}

export default App;