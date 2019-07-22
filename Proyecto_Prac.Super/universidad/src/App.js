import React, { Component } from 'react';
import './App.css';
import MenuContainer from './components/menu/MenuContainer';
import Urls from './components/utils/urls/urls';
import Login from './components/login/loginC';

let userData = { id_persona: 0, nombre: "", apellido: "", tipo_usuario: "Anonimo" }

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");



class App extends Component {

   cargar = (user,pass) =>{
    fetch('http://localhost:8081/login', {
      method: 'POST',
      body: JSON.stringify({ usuario: user, contraseña: pass }),
      headers: myHeaders
    })
      .then(function(response){ 
        userData = response.json(); 
      })
  }

  render() {
    return (
      <div>
        <MenuContainer user={userData} refresh={this.refresh}/>
        <Urls />
        <Login onCargar={this.cargar} />
      </div>
    );
  }
}

export default App;
