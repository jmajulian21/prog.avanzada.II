import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class Menu extends Component {
    render() {
        return(
            <div>
                <NavLink exact to='/history' activeClassName="active">Historia</NavLink>
                <NavLink exact to='/home' activeClassName="active">Home</NavLink>
                <NavLink exact to='/home/marcas' activeClassName="active">Home-Marcas</NavLink>
                <NavLink exact to='/home/productos' activeClassName="active">Home-Productos</NavLink>
            </div>
        )
    }
}


export default Menu;