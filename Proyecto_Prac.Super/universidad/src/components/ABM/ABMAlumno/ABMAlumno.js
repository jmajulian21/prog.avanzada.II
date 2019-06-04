import React, { Component } from 'react';
import Persona from '../../persona/personaC';
import Alumno from '../../alumno/alumnoC';
import Adicional from '../../datosAdicionales/adicionalC';
import { Grid, Button } from '@material-ui/core';
import { styles } from '../../utils/css/styles';
import { withStyles } from '@material-ui/core/styles';
import {app} from '../../../model/config/config';

class AlumnoC extends Component {
  constructor(props){
    super(props);
    this.state = {
        persona:[]
    }
    this.agregarPersona = this.agregarPersona.bind(this);
}
agregarPersona(id, nombres, apellido,tipoDoc,nroDoc,fechNacimiento,sexo,direccion,piso,codPostal,localidad) {
    this.db.push().set({id:id, 
      nombres:nombres,
      apellido:apellido ,
      tipoDoc:tipoDoc ,
      nroDoc:nroDoc ,
      fechNacimiento:fechNacimiento ,
      sexo:sexo ,
      direccion:direccion ,
      piso:piso,
      codPostal:codPostal,
      localidad:localidad});
  }

  componentDidMount(){
    this.db = app.database().ref().child('persona');
      const {persona} = this.state;
      this.db.on('child_added', snap => {
      persona.push({id: snap.key})
      });
      this.setState({persona});
  }

  render() {
    return (
      <body>
        <Persona onAdd={this.agregarPersona}/>
        <Alumno />
        <Adicional />
        <Grid container direction="row">
          <Grid item xs={11}>
            <Grid container direction="row">
              <Grid item xs={8} />
              <Grid item xs={2}>
                <Button variant="contained" color="primary">Cancelar</Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" color="primary">Aceptar</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </body>
    );
  }
}

export default withStyles(styles)(AlumnoC);