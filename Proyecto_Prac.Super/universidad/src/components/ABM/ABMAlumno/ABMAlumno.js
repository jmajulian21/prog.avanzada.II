import React, { Component } from 'react';
import Persona from '../../persona/personaC';
import Alumno from '../../alumno/alumnoC';
import { Grid, Button } from '@material-ui/core';
import { dtoPersona } from '../../../model/dto/Persona';
import { dtoAlumno } from '../../../model/dto/Alumno';

var data = {nombre: 'Julian'};

class AlumnoC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personas: [],
      alumnos: []
    }
  }
  
  
  onAgregar = () => {
    fetch('http://localhost:8081/alumnos', {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'no-cors',
      method: 'POST',
      body: data.nombre,
    }).then(res => res)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Grid container direction="row">
        <Grid item xs={12}>
          <Persona item={dtoPersona} />
          <Alumno item={dtoAlumno} />
        </Grid>
        <Grid item xs={10} align="right">
          <Button variant="contained" margin="normal" color="primary" onClick={this.onAgregar}>Aceptar</Button>
        </Grid>
      </Grid>
    );
  }
}

export default AlumnoC;


/*datoAlumno:{
          id: null,
          nombre: dtoPersona.nombres,
          apellido: dtoPersona.apellido ,
          tipoDoc: dtoPersona.tipoDoc ,
          nroDoc: dtoPersona.nroDoc ,
          fechNacimiento: dtoPersona.fechNacimiento ,
          sexo: dtoPersona.sexo ,
          direccion: dtoPersona.direccion ,
          piso: dtoPersona.piso,
          codPostal: dtoPersona.codPostal,
          localidad: dtoPersona.localidad,
          telefono: dtoPersona.telefono,
          celular: dtoPersona.celular,
         email: dtoPersona.email,
          detalle: {
            id: null,
            egresadoDe:dtoAlumno.egresadoDe,
            titulo:dtoAlumno.titulo,
            promedio:dtoAlumno.promedio
          }
        }*/