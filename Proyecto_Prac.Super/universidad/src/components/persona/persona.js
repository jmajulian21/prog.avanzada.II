import React, { Component } from 'react';
import { Grid,Paper,TextField,Button } from '@material-ui/core';
import {localidad,tipoDoc,sexo} from '../../datos/datos';

let i = 0;

class Persona extends Component {
  constructor(props){
    super(props);
    this.state = {
        id: 0 ,
        nombres: null ,
        apellido: null ,
        tipoDoc: null ,
        nroDoc: null ,
        fechNacimiento: null ,
        sexo: null ,
        direccion: null ,
        piso: null,
        codPostal: null,
        localidad: null
    }
    this.onClickEnviar = this.onClickEnviar.bind(this);
}

handleChange = (e, prop) => {
    let valor = e.target.value;
    this.setState({ [prop]: valor });
}


onClickEnviar = ()  =>{
  i += 1;
    this.props.onAdd(i, 
      this.state.nombres ,
      this.state.apellido ,
      this.state.tipoDoc ,
      this.state.nroDoc ,
      this.state.fechNacimiento ,
      this.state.sexo ,
      this.state.direccion ,
      this.state.piso,
      this.state.codPostal,
      this.state.localidad);
}


  render() {
    return (
      <div>
          <Grid container direction="column">
          <Grid item xs={11}>
          <Paper style={{ border: '1px solid black', 'border-radius':'5px'}}>
            <Grid item xs={11}>
              <h3>Datos Personales</h3>
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} id="standard-uncontrolled" label="Nombre" value={this.state.nombres} onChange={e => this.handleChange(e,"nombres")}/>
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} id="standard-uncontrolled" label="Apellido" value={this.state.apellido} onChange={e => this.handleChange(e,"apellido")} />
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} select id="outlined-select-currency-native" label="Tipo Documento" value={this.state.tipoDoc} onChange={e => this.handleChange(e,"tipoDoc")} SelectProps={{native: true}}>
                  {tipoDoc.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </TextField>
              <TextField style={{ marginLeft: 10 ,marginRight: 10, marginBottom:10}} id="standard-uncontrolled" label="Documento" value={this.state.nroDoc} onChange={e => this.handleChange(e,"nroDoc")}/>
              <TextField id="date" label="Fecha Nacimiento" type="date" InputLabelProps={{shrink: true}} value={this.state.fechNacimiento} onChange={e => this.handleChange(e,"fechNacimiento")}/>
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} select id="outlined-select-currency-native" label="Sexo" SelectProps={{native: true}} value={this.state.sexo} onChange={e => this.handleChange(e,"sexo")}>
                  {sexo.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </TextField>
            </Grid>
            <Grid item xs={10} >
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} id="standard-uncontrolled" label="Direccion" value={this.state.direccion} onChange={e => this.handleChange(e,"direccion")} />
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} id="standard-uncontrolled" label="piso" value={this.state.piso} onChange={e => this.handleChange(e,"piso")}/>
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} id="standard-uncontrolled" label="Cod.Postal" value={this.state.codPostal} onChange={e => this.handleChange(e,"codPostal")}/>
              <TextField style={{ marginLeft: 10 ,marginRight: 10}} select id="outlined-select-currency-native" label="Localidad" value={this.state.localidad} onChange={e => this.handleChange(e,"localidad")} SelectProps={{native: true}}>
                  {localidad.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </TextField>
            </Grid>  
           </Paper>
           <Button variant="contained" onClick={this.onClickEnviar}>Aceptar</Button>
           </Grid>
          </Grid>
      </div>
    );
  }
}

export default Persona;