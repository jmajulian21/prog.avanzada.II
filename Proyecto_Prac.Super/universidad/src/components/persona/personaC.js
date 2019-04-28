import React, { Component } from 'react';
import Persona from './persona';
import Adicional from '../datosAdicionales/adicionalC';

class PersonaC extends Component {
  render() {
    return (
      <div>
          <Persona/>  
          <Adicional/>
      </div>
    );
  }
}

export default PersonaC;