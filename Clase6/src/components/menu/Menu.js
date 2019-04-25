import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Boton from '../../components/boton/BotonC'
import Contenedor from '../Contenedor/Contenedor'

const styles = {
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };
class Menu extends Component {
    render() {
        return(
            <Contenedor>
                <NavLink exact to='/history' activeClassName="active">Historia</NavLink>
                <NavLink exact to='/home' activeClassName="active">Home</NavLink>
                <NavLink exact to='/home/marcas' activeClassName="active">Home-Marcas</NavLink>
                <NavLink exact to='/home/productos' activeClassName="active">Home-Productos</NavLink>
                <Boton value="Login"/>
            </Contenedor>
        )
    }
}


export default Menu;