import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const Inicio = () => <h1>Inicio</h1>

class Boton extends Component {
  render() {
    return (
      <div>
        <Button variant={this.props.variant||"contained"} 
                color={this.props.color||"primary"} 
                disabled={false}
                children={this.props.value}>
        </Button>
        
      </div>
    );
  }
}

export default Boton;