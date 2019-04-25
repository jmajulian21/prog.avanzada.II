import React, { Component } from 'react';
import Boton from './Boton';

const Inicio = () => <h1>Inicio</h1>

class BotonC extends Component {
  render() {
    return (
      <div>
        <Boton {...this.props}/>
      </div>
    );
  }
}

export default BotonC;