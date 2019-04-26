import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class Menu extends Component {
    render() {
        return(
            <div>
                <NavLink exact to='/home' activeClassName="active">Home</NavLink>
                <NavLink exact to='/history' activeClassName="active">Historia</NavLink>
                <NavLink exact to='/personas/persona' activeClassName="active">Persona</NavLink>
                <NavLink exact to='/alumnos/gestion' activeClassName="active">Alumno</NavLink>
                <NavLink exact to='/profesores/gestion' activeClassName="active">Profesor</NavLink>
            </div>
        )
    }
}


export default Menu;