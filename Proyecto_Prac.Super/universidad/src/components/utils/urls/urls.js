import React, { Component } from 'react';
import { Route, Switch,Redirect} from 'react-router-dom';

import History from '../../home/history/History';
import Persona from '../../persona/personaC';
import Alumno from '../../alumno/alumnoC';
import Profesor from '../../profesor/profesorC';
import Login from '../../login/loginC';

const Inicio = () => <h1>Inicio</h1>

class Urls extends Component {
  render() {
    return (
            <Switch>
              <Route exact path='/inicio' component={Inicio}/>
              <Route exact path='/history' component={History}/>
              <Route exact path='/alumnos/gestion' component={Alumno}/>
              <Route exact path='/profesores/gestion' component={Profesor}/>
              <Route exact path='/personas/persona' component={Persona}/>
              <Route exact path='/login' component={Login}/>

              <Redirect to='/inicio'/>
            </Switch>
    );
  }
}

export default Urls;
