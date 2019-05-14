import React, { Component } from 'react';
import Persona from '../../persona/personaC';
import Alumno from '../../alumno/alumnoC';
import Adicional from '../../datosAdicionales/adicionalC';
import { Grid,Button } from '@material-ui/core';
import {styles} from '../../utils/css/styles';
import { withStyles } from '@material-ui/core/styles';

class AlumnoC extends Component {
  render() {
    return (
      <div>
        <Persona/>
        <Alumno/>
        <Adicional/>
      <Grid container direction="row">
        <Grid item xs={11}>
          <Grid container direction="row">
              <Grid item xs={8}/>
              <Grid item xs={2}>
                  <Button variant="contained" color="primary">Cancelar</Button>
              </Grid>
              <Grid item xs={2}>
                  <Button variant="contained" color="primary">Aceptar</Button>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AlumnoC);