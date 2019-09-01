import React, { Component } from 'react';
import Admin from './menuSingle/Admin';
import Profesor from './menuSingle/Profesor';
import Secretaria from './menuSingle/Secretaria';
import { Grid, Toolbar, AppBar } from '@material-ui/core';

class Menu extends Component {

    render() {

        return (
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={11}>
                            <Admin/>
                            <Profesor/>
                            <Secretaria/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}
export default Menu;