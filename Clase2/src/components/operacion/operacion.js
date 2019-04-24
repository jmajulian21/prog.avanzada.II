import React, {Component} from "react";


class Operacion extends Component{
    constructor(props) {
        super(props);
        this.state = {
            resultado:""
        }
      }
    render(){
        return(
            <div>
                <button onClick={this.sumar}>Sumar</button>
                <button onClick={this.restar}>Restar</button>
                <button onClick={this.dividir}>Dividir</button>
                <button onClick={this.multiplicar}>Multiplicar</button>
                <br/>
                <br/>
                Resultado: <input type='text' defaultValue={this.state.resultado}/>
            </div>
        )
    }

    // Para input de tipo text que utiliza onchage se usa la variable value para caso contrario defaultValue
    sumar = event => {
        event.preventDefault();
        this.setState({resultado:Number(this.props.Nro1) + Number(this.props.Nro2)})
        
    }
    restar = event => {
        event.preventDefault();
        this.setState({resultado:Number(this.props.Nro1) - Number(this.props.Nro2)})
    }
    dividir = event => {
        event.preventDefault();
        this.setState({resultado:Number(this.props.Nro1) / Number(this.props.Nro2)})
    }
    multiplicar = event => {
        event.preventDefault();
        this.setState({resultado:Number(this.props.Nro1) * Number(this.props.Nro2)})
    }
}
export default Operacion;