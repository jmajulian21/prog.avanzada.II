import React, { Component } from 'react';
import Persona from '../../persona/personaC';
import Alumno from '../../alumno/alumnoC';
import Adicional from '../../datosAdicionales/adicionalC';

class AlumnoC extends Component {
  render() {
    return (
      <div>
            <Persona/>
            <Alumno/>
            <Adicional/>
      </div>
    );
  }
}

export default AlumnoC;