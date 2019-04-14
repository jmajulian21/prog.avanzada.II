import React, {Component} from 'react';

export default class Formulario  extends Component{
    constructor(props){
        super(props);
    }

    submit = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(this.props.lista);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
                    <input type="submit" value="Cargar"/>
                </form>
            </div>
        )
    }
}