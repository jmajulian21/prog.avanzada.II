import React, {Component} from "react";

class Sumar extends Component {
    constructor(props){
        super(props);
    }

    sumar = e => {
        this.props.getSuma(this.props.numUno+this.props.numDos);
    }

    rectar = e => {
        this.props.getSuma(this.props.numUno+this.props.numDos);
    }

    dividir = e => {
        this.props.getSuma(this.props.numUno+this.props.numDos);
    }

    multiplicar = e => {
        this.props.getSuma(this.props.numUno+this.props.numDos);
    }

    render(){
        return(
            <div>
                <button onClick={this.sumar}>Sumar</button>
                <button onClick={this.rectar}>Rectar</button>
                <button onClick={this.dividir}>Dividir</button>
                <button onClick={this.multiplicar}>Multiplicar</button>
            </div>
        )
    }
}

export default Sumar;