import React, { Component } from 'react';
import Carrera from './Carrera';


class CarreraC extends Component {
    constructor(props){
        super(props);
        this.state = {
            carrera:[]
        }
        
        this.db = this.app.database().ref().child('carreras');
        this.agregarDato = this.agregarDato.bind(this);
    }
    
    agregarDato(id, carrera, fechaAlta) {
        this.db.push().set({id:id, carrera:carrera ,fechaAlta:fechaAlta});
      }

    componentDidMount(){
        const {carrera} = this.state;
        this.db.on('child_added', snap => {
            carrera.push({
                id: snap.key,
                carrera : snap.val().carrera,
                fechaAlta : snap.val().fechaAlta
            })
        });
        this.setState({carrera});
    }

    render() {
        return (
           <Carrera onAdd={this.agregarDato}/>
        )
    }
}

export default CarreraC;

