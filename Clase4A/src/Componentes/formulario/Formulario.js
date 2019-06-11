import React from "react";

class Formulario extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dato:''
        }
    }

    submit = event => {
        event.preventDefault();
        console.log(event);
        console.log(this);
        this.props.onCargar();        
    }

    Clave = ver => {

        if (ver) {
            return (
                <div>
                    <input type="password"/>
                </div>
            )
        } 
        return null;
    }
    handleChange=(e,variable)=>{
        this.setState({
            [variable]: e.target.value})
    }
    render() {
        console.log(this);
        let { clave } = this.props;
        
        return (
            <div>
                <form onSubmit={this.submit}>
                    
                    <div>
                        <input type="text" 
                        value={this.state.dato} 
                        onChange={e=>{this.handleChange(e,"dato")}}/>
                    </div>
                    {
                        this.Clave(clave)
                    }
                    <div>
                        <input type="submit" />
                    </div>
                </form>

            </div>
        )
    }
}

export default Formulario;