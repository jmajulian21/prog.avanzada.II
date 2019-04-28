import React, { Component } from 'react';
import { Grid,Paper,TextField } from '@material-ui/core';

const especialidad = [{value:'P' , label: 'Tec. Sup. en Programacion'},
                      {value:'A' , label: 'Tec. Sup. en Sistemas'}];

class Alumno extends Component {
  render() {
    return (
      <div style={{ padding: 10}}>
        <Grid container direction="column">
          <Grid item xs='11'>
          <Paper style={{ border: '1px solid black', 'border-radius':'5px'}}>
            <Grid item xs={11}>
              <h3>Datos Alumno</h3>
              <TextField disabled style={{ marginLeft: 10 ,marginRight: 10}} id="standard-uncontrolled" label="Legajo" value="12345"/>
              <TextField style={{ marginLeft: 10 ,marginRight: 10, marginBottom:10}} id="standard-uncontrolled" label="Egresado De" />
              <TextField style={{ marginLeft: 10 ,marginRight: 10, marginBottom:10}} id="standard-uncontrolled" label="Titulo" />
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} select id="outlined-select-currency-native" label="Especialidad" SelectProps={{native: true}}>
                  {especialidad.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </TextField>
            </Grid> 
           </Paper>
           </Grid>
          </Grid>
      </div>
    );
  }
}

export default Alumno;