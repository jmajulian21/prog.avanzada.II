import React, { Component } from 'react';
import { Grid,Paper,TextField } from '@material-ui/core';

class Adicional extends Component {
  render() {
    return (
      <div style={{ padding: 10}}>
       <Grid container direction="column">
          <Grid item xs='11'>
          <Paper style={{ border: '1px solid black', 'border-radius':'5px'}}>
            <Grid item xs={11}>
              <h3>Datos Adicionales</h3>
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} id="standard-uncontrolled" label="Nro.Telefono"/>
              <TextField style={{ marginLeft: 10 ,marginRight: 10, marginBottom:10}} id="standard-uncontrolled" label="Nro.Celular" />
              <TextField style={{ marginLeft: 10 ,marginRight: 10, marginBottom:10}} id="standard-uncontrolled" label="Email" />
            </Grid> 
           </Paper>
           </Grid>
          </Grid>
      </div>
    );
  }
}

export default Adicional;