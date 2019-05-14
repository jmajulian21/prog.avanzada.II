import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Tabla from '../../utils/tabla/TablaC';

let headers = ["Id", "Nombre", "Email", "Sueldo", "Editar", "Eliminar"]


class ListaPersona extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [{ id: 1, nombre: "Julian M.", email: "julian.moreno@hotmail.com", sueldo: "23432" },
      { id: 2, nombre: "Hernan P.", email: "julian.moreno@hotmail.com", sueldo: "27000" }]
    }
    this.eliminarRow = this.eliminarRow.bind(this);
  }

  eliminarRow (id) {
    let temp = [...this.state.rows];
    temp = temp.filter(row => row.id === id);
    this.setState({rows: temp});
  }

  render() {
    return (
      <div>
        <Router>
          <Tabla headers={headers} rows={this.state.rows} onDelete={this.eliminarRow}/>
        </Router>
      </div>
    );
  }
}
export default ListaPersona;
