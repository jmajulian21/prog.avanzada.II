import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Tabla from '../../utils/tabla/TablaC';

let headers = ["Id","Nombre","Email","Sueldo","Editar","Eliminar"]

let rows = [{id:1,nombre:"Julian M.",email:"julian.moreno@hotmail.com",sueldo:"23432"},
            {id:2,nombre:"Hernan P.",email:"julian.moreno@hotmail.com",sueldo:"27000"}]

class ListaPersona extends Component {
render(){
  return (
    <div>
      <Router>
        <Tabla headers={headers} rows={rows}/>
      </Router>
    </div>
  );
 }
}
export default ListaPersona;
