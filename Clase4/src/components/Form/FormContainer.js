import React, {Component} from 'react';
import Form from './Form';

export default class FormContainer extends Component{

    cargar = user => {
        console.log(user);
    }

    render(){
        return(
          <Form onCargar={this.cargar}/>
        );
    }
}