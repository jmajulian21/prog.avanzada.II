import React, { Component } from 'react';
import { Grid,Paper,TextField } from '@material-ui/core';

class Profesor extends Component {
  render() {
    return (
      <div>
       <Grid container direction="column">
          <Grid item xs='11'>
          <Paper style={{ border: '1px solid black', 'border-radius':'5px'}}>
            <Grid item xs={11}>
              <h3>Datos Profesor</h3>
              <TextField disabled style={{ marginLeft: 10 ,marginRight: 10}} id="standard-uncontrolled" label="Legajo" value="12345"/>
              <TextField style={{ marginLeft: 10 ,marginRight: 10, marginBottom:10}} id="standard-uncontrolled" label="Egresado De" />
              <TextField style={{ marginLeft: 10 ,marginRight: 10, marginBottom:10}} id="standard-uncontrolled" label="Titulo" />
            </Grid> 
           </Paper>
           </Grid>
          </Grid>
      </div>
    );
  }
}

export default Profesor;