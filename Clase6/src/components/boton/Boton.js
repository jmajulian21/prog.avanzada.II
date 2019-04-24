import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const Inicio = () => <h1>Inicio</h1>

class Boton extends Component {
  render() {
    return (
      <div>
        <Button variant={this.props.variant||"contained"} color="primary" disabled={false}>
            Hello World
        </Button>
      </div>
    );
  }
}

export default Boton;