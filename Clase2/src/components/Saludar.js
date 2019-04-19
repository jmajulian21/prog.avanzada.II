import React, {Component} from "react";

class Saludar extends Component {
    constructor(props){
        super(props);
        this.name = "Pepe";
    }

    ejecutar = e => {
        this.props.onEventoPadre(e);
    }

    render(){
        return(
            <div>
                <button onClick={this.ejecutar}>Ejecutar</button>
            </div>
        )
    }
}

export default Saludar;