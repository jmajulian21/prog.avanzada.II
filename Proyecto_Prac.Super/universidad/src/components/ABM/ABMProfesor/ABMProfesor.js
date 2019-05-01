import React, { Component } from 'react';
import Persona from '../../persona/personaC';
import Profesor from '../../profesor/profesorC';
import Adicional from '../../datosAdicionales/adicionalC';

class altaProfesor extends Component {
  render() {
    return (
      <div>
            <Persona/>
            <Profesor/>
            <Adicional/>
      </div>
    );
  }
}

export default altaProfesor;