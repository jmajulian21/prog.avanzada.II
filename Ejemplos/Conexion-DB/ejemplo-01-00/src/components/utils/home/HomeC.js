import React, {Component} from "react";
import Home from "./Home";
import firebase from "firebase";
import "firebase/database";
import {DB_CONFIG} from '../../config/config';

class HomeC extends Component{
    constructor(props){
        super(props);
        this.state = {
            datos:[]
        }

        this.app = firebase.initializeApp(DB_CONFIG);
        this.db = this.app.database().ref().child('datos');
        this.agregarDato = this.agregarDato.bind(this);
    }
    
    agregarDato(id, text, date) {
        //let temp = [...this.state.datos];
        //temp.push({ id: id, text: text, date: date });
        //this.setState({ datos: temp });
        this.db.push().set({text:text,date:date});
      }

    componentDidMount(){
        const {datos} = this.state;
        this.db.on('child_added', snap => {
            datos.push({
                id: snap.key,
                text : snap.val().text,
                date : snap.val().date
            })
        });
        this.setState({datos});
    }

    render(){
        return(
            <Home onAdd={this.agregarDato}/>
        )
    };
}

export default HomeC;