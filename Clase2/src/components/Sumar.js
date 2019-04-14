import React, {Component} from "react";

class Sumar extends Component {
    constructor(props){
        super(props);
    }

    sumar = e => {
        this.props.getSuma(this.props.numUno+this.props.numDos);
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <button onClick={this.sumar}>Sumar</button>
                <h3>El resultado es: {this.props.numUno+this.props.numDos}</h3>
            </div>
        )
    }
}

export default Sumar;