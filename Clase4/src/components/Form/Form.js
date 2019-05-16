import React, {Component} from 'react';


const Nombre = ({name}) => <strong>this {name}</strong> 

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            clave1:"",
            clave2:""
        }
    }

    handleChange = (e,prop) => {
        let valor = e.target.value;
        this.setState({[prop]: valor.charAt(0).toUpperCase() + valor.slice(1)});
    }

    submit = e =>{
        e.preventDefault(); // Prevenir el evento por default, en este caso el evento es resfrescar la pagina 
        this.props.onCargar(this.state);
    }
    render(){
        console.log(this.state);
        let {name,email,clave1,clave2} = this.state;
        return(
                <form onSubmit={this.submit}>
                <div>
                    {
                        this.state.name && <Nombre name={this.state.name}/>
                    }
                </div>
                    Nombre: <input type="text" id="name" value={name} onChange={e => this.handleChange(e,"name")}></input>
                    <br/>
                    Email: <input type="text" id="email" value={email} onChange={e => this.handleChange(e,"email")}></input>
                    <br/>
                    Clave: <input type="password" id="clave1" value={clave1} onChange={e => this.handleChange(e,"clave1")}></input>
                    <br/>
                    Confirmar Clave: <input type="password" id="clave2" value={clave2} onChange={e => this.handleChange(e,"clave2")}></input>
                    <br/>
                    <input type="submit" value="Enviar"/>
                </form>
        );
    }
}