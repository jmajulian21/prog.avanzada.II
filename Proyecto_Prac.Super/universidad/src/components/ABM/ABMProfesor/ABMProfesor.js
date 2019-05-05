import React, { Component } from 'react';
import Persona from '../../persona/personaC';
import Profesor from '../../profesor/profesorC';
import Adicional from '../../datosAdicionales/adicionalC';
import { Grid,Button } from '@material-ui/core';

class altaProfesor extends Component {
  render() {
    return (
      <div style={{ padding: 10}}>
            <Persona/>
            <Profesor/>
            <Adicional/>
            <Grid container direction="row">
        <Grid item xs={11}>
          <Grid container direction="row">
              <Grid item xs={10}/>
              <Grid item xs={1}>
                  <Button variant="contained" color="primary">Cancelar</Button>
              </Grid>
              <Grid item xs={1}>
                  <Button variant="contained" color="primary">Aceptar</Button>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default altaProfesor;