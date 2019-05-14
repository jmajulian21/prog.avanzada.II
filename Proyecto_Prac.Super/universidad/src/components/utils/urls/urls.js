import React, { Component } from 'react';
import { Route, Switch,Redirect} from 'react-router-dom';

import History from '../../home/history/History';
import ABMAlumno from '../../ABM/ABMAlumno/ABMAlumno';
import ABMProfesor from '../../ABM/ABMProfesor/ABMProfesor';
import ABMNotas from '../../ABM/ABMNotas/ABMNotas';
import Login from '../../login/loginC';
import Asistencias from '../../asistencias/AsistenciasC';
import ConsultaMateria from '../../consulta/materia/consultaC';

const Inicio = () => <h1>Facultad de Ciencia</h1>

class Urls extends Component {
  render() {
    return (
            <Switch>
              <Route exact path='/inicio' component={Inicio}/>
              <Route exact path='/history' component={History}/>
              <Route exact path='/alumnos/gestion' component={ABMAlumno}/>
              <Route exact path='/profesores/gestion' component={ABMProfesor}/>
              <Route exact path='/profesores/profesor/notas' component={ABMNotas}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/asistencias' component={Asistencias}/>
              <Route exact path='/consulta/materias' component={ConsultaMateria}/>

              <Redirect to='/inicio'/>
            </Switch>
    );
  }
}

export default Urls;
