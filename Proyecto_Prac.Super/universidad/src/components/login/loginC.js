import React, { Component } from 'react';
import Login from './login';

class LoginC extends Component{
    render(){
        return(
            <Login {...this.props}/>
        )
    }
}

export default LoginC;