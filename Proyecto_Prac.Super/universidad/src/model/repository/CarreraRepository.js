import React, { Component } from 'react';
import firebase from "firebase";
import "firebase/database";
import {DB_CONFIG} from '../config/config';

class CarreraRepository extends Component{
    constructor(props){
        super(props);
        this.state = {
            carreras:[ ]
        }

        this.app = firebase.initializeApp(DB_CONFIG);
        this.db = this.app.database().ref('carreras').child('carrera');
    }
    
     alta(id, carrera, date) {
        this.db.push().set({id:id,carrera:carrera,fechaAlta:date});
      }

    componentDidMount(){
        const {datos} = this.state;
        this.db.on('child_added', snap => {
            datos.push({
                id: snap.val().Id,
                Carrera : snap.val().carrera,
                fechaAlta : snap.val().date
            })
        });
        this.setState({datos});
    }
    render() {
        return (
           ''
        )
    }
}

export default CarreraRepository;