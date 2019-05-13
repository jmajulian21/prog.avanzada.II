import React, { Component } from 'react';
import { Route, Switch,Redirect} from 'react-router-dom';

import Lista from '../tabla/TablaC';
import Cargar from '../../ABM/ABMAlumno/ABMAlumno';

const Inicio = () => <h1>Inicio</h1>

class Route extends Component {
  render() {
    return (
            <Switch>
              <Route exact path='/Personas' component={Lista}/>

              <Redirect to='/inicio'/>
            </Switch>
    );
  }
}

export default Urls;
