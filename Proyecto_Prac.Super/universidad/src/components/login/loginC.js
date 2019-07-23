import React, { Component } from 'react';
import Login from './login';

let userData = { id_persona: 0, nombre: "", apellido: "", tipo_usuario: "Anonimo" }

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

class LoginC extends Component{
    render(){
        return(
            <Login/>
        )
    }
}

export default LoginC;