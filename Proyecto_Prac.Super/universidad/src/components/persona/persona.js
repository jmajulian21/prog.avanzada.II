import React, { Component } from 'react';
import { Grid,Paper,TextField } from '@material-ui/core';
import {localidad,tipoDoc,sexo} from '../../datos/datos';

class Persona extends Component {
  render() {
    
    return (
      <div>
        
          <Grid container direction="column">
          <Grid item xs={11}>
          <Paper style={{ border: '1px solid black', 'border-radius':'5px'}}>
            <Grid item xs={11}>
              <h3>Datos Personales</h3>
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} id="standard-uncontrolled" label="Nombre" />
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} id="standard-uncontrolled" label="Apellido" />
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} select id="outlined-select-currency-native" label="Tipo Documento" SelectProps={{native: true}}>
                  {tipoDoc.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </TextField>
              <TextField style={{ marginLeft: 10 ,marginRight: 10, marginBottom:10}} id="standard-uncontrolled" label="Documento" />
              <TextField id="date" label="Fecha Nacimiento" type="date" InputLabelProps={{shrink: true}}/>
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} select id="outlined-select-currency-native" label="Sexo" SelectProps={{native: true}}>
                  {sexo.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </TextField>
            </Grid>
            <Grid item xs={10} >
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} id="standard-uncontrolled" label="Direccion" />
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} id="standard-uncontrolled" label="piso" />
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} id="standard-uncontrolled" label="Cod.Postal" />
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} select id="outlined-select-currency-native" label="Localidad" SelectProps={{native: true}}>
                  {localidad.map(option => (
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

export default Persona;