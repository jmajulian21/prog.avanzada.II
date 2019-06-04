import React, { Component } from "react";


class Home extends Component {
    constructor() {
        super();
        this.state = {
            id: 1,
            text: "",
            date: "",
        }
        this.onClickEnviar = this.onClickEnviar.bind(this);
    }

    handleChange = (e, prop) => {
        let valor = e.target.value;
        this.setState({ [prop]: valor });
    }

    onClickEnviar = ()  =>{
        this.props.onAdd(this.state.id, this.state.text, this.state.date);
    }
    
    render() {
        return (
            <div>
                Text: <input type='text' value={this.state.text} onChange={e => this.handleChange(e,"text")}/>
                Date: <input type='date' value={this.state.date} onChange={e => this.handleChange(e,"date")}/>
                <button onClick={this.onClickEnviar}>Enviar</button>
            </div>
        )
    };
}

export default Home;
