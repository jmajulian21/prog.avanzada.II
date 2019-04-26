import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class Persona extends Component {
  render() {
    return (
      <div>
      <h1>Datos Generales</h1>
      <Grid container justify="left" spacing={0}>
                <TextField
                id="standard-uncontrolled"
                label="Nombre"
                defaultValue=""
                margin="normal"
              />

              <TextField
                id="standard-uncontrolled"
                label="Apellido"
                defaultValue=""
                margin="normal"
              />
                <TextField
                id="standard-uncontrolled"
                label="TipoDocumento"
                defaultValue=""
                margin="normal"
              />
               <TextField
                id="standard-uncontrolled"
                label="Documento"
                defaultValue=""
                margin="normal"
              />
      </Grid>
      <Grid container justify="left" spacing={0}>
    

              <FormControl component="fieldset">
              <FormLabel component="legend">Sexo</FormLabel>
                    <RadioGroup >
                        <FormControlLabel value="female" control={<Radio />} label="Femenino" />
                        <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                    </RadioGroup>
              </FormControl>
      </Grid>      
      </div>
    );
  }
}

export default Persona;