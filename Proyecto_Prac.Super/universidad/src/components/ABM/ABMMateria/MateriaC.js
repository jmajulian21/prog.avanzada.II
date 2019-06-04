import React, { Component } from 'react';
import Materia from './Materia';

import "firebase/database";
import {app} from '../../../model/config/config';

class MateriaC extends Component {
    constructor(props){
        super(props);
        this.state = {
            materia:[]
        }

        
        this.db = app.database().ref().child('materia');
        this.agregarDato = this.agregarDato.bind(this);
    }
    agregarDato(id, legajo, materia,fechaAlta) {
        this.db.push().set({id:id, legajo:legajo ,materia:materia,fechaAlta:fechaAlta});
      }

    componentDidMount(){
        const {materia} = this.state;
        this.db.on('child_added', snap => {
            materia.push({
                id: snap.key,
                legajo : snap.val().legajo,
                materia : snap.val().materia,
                fechaAlta : snap.val().fechaAlta
            })
        });
        this.setState({materia});
    }

    render() {
        return (
            <Materia onAdd={this.agregarDato}/>
        )
    }
}

export default MateriaC;