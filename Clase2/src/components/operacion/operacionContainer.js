import React, {Component} from "react";
import Operacion from './operacion';

class OperacionContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            Nro1:"",
            Nro2:"",
        }
        this.setNro1 = this.setNro1.bind(this);
        this.setNro2 = this.setNro2.bind(this);
    }
    render(){
        return(
            <div>
                Nro.1 <input type='text' value={this.state.Nro1} onChange={this.setNro1}/>
                <br/>
                Nro.2 <input type='text' value={this.state.Nro2} onChange={this.setNro2}/>
                <br/>
                <br/>
                <Operacion Nro1={this.state.Nro1} Nro2={this.state.Nro2}/>
            </div>
        )
    }

    //Opcion 1
    setNro1(e){this.setState({Nro1: e.target.value})}
    setNro2(e){this.setState({Nro2: e.target.value});}

    //Opcion 2
    handleChange=(e,variable)=>{
        this.setState({
            [variable]: e.target.value})
    }

}
export default OperacionContainer;