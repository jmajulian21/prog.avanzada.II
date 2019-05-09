import React, { Component } from 'react';
import { Grid,Button,Toolbar,AppBar } from '@material-ui/core';
import { Link, Redirect } from "react-router-dom";
class Menu extends Component {

    ir = to => {
        this.props.history.push(to);
    }
    render() {
        console.log(this.props)
        // if (true) return <Redirect to="/history" />
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={11}>
                                <Button color="inherit" onClick={() => this.ir("/inicio")}>Inicio</Button>
                                <Button color="inherit" onClick={() => this.ir("/history")} >Historia</Button>
                                <Button color="inherit" onClick={() => this.ir("/alumnos/gestion")} >Alumno</Button>
                                <Button color="inherit" onClick={() => this.ir("/profesores/gestion")} >Profesor</Button>
                                <Button color="inherit" onClick={() => this.ir("/asistencias")}>Asistencias</Button>
                            </Grid>
                            <Grid item xs={1}>
                                <Button color="inherit" href='/login'>Login</Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
 
            </div>
        )
    }
}


export default Menu;