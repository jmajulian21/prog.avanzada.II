import React, {Component} from 'react';
import Formulario from './Formulario';

export default class FormularioContainer extends Component{
    lista=[1,2,3,4]
    render(){
        return(
            <Formulario lista={this.lista}/>
        )
    }
}