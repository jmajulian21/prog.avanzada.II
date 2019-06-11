import React, { Component } from 'react';
import Persona from '../../persona/personaC';
import Alumno from '../../alumno/alumnoC';
import { Grid, Button } from '@material-ui/core';
import {dtoPersona} from '../../../model/dto/Persona';
import {dtoAlumno} from '../../../model/dto/Alumno';

class AlumnoC extends Component {
  constructor(props){
    super(props);
    this.state = {
      personas:[],
      alumnos:[]}
}

  onAgregar = () => {
    console.log(dtoPersona);
    console.log(dtoAlumno);
  }
  render() {
    return (
        <Grid container direction="row">
          <Grid item xs={12}>
            <Persona item={dtoPersona}/>
            <Alumno item={dtoAlumno}/>
          </Grid>
          <Grid item xs={10} align="right">
            <Button variant="contained" margin="normal" color="primary" onClick={this.onAgregar}>Aceptar</Button>
          </Grid>
        </Grid>
    );
  }
}

export default AlumnoC;