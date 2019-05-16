import React, { Component } from 'react';
import Listado from './listado';

class ListadoC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista:[]
        }
    }
    componentDidMount(){
        fetch("https://restcountries.eu/rest/v2/all") 
        .then(data => {
            return data.json(); 
        }).catch(p=>0)
        .then (data => {
            this.setState({lista:data})
        })
    }

    render(){
        return(
            <Listado data={this.state.lista}/>
        );
    }
}

export default ListadoC;