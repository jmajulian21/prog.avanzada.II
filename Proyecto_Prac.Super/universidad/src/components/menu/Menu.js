import React, { Component } from 'react';
import { Grid, Button, Toolbar, AppBar } from '@material-ui/core';

class Menu extends Component {

    ir = to => {
        this.props.history.push(to);
    }

    render() {
        const user = {};
        user.tipo_usuario = '';
        var Menuitems;

        if (user.tipo_usuario === 'Admin') {
            Menuitems = <div><Button color="inherit" onClick={() => this.ir("/alumnos/gestion")} >Alumno</Button>
                <Button color="inherit" onClick={() => this.ir("/profesores/gestion")} >Profesor</Button>
                <Button color="inherit" onClick={() => this.ir("/materias/asignacion")}>Asignacion Materia</Button>
            </div>
        };

        if (user.tipo_usuario === 'Profesor') {
            Menuitems = <div>
                <Button color="inherit" onClick={() => this.ir("/profesores/profesor/notas")}>Registrar Notas</Button>
            </div>
        };

        if (user.tipo_usuario === 'Secretaria') {
            Menuitems = <div>
                <Button color="inherit" onClick={() => this.ir("/asistencias")}>Asistencias</Button>
                <Button color="inherit" onClick={() => this.ir("/consulta/materias")}>Consulta Materia</Button>
            </div>
        };

        return (
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={11}>{ Menuitems}</Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

//<Button color="inherit" onClick={() => this.ir("/inicio")}>Inicio</Button>
//<Button color="inherit" onClick={() => this.ir("/history")} >Historia</Button>
/*<div><Button color="inherit" onClick={() => this.ir("/alumnos/gestion")} >Alumno</Button>
                <Button color="inherit" onClick={() => this.ir("/profesores/gestion")} >Profesor</Button>
                <Button color="inherit" onClick={() => this.ir("/asistencias")}>Asistencias</Button>
                <Button color="inherit" onClick={() => this.ir("/consulta/materias")}>Consulta Materia</Button>
                <Button color="inherit" onClick={() => this.ir("/profesores/profesor/notas")}>Registrar Notas</Button>
                <Button color="inherit" onClick={() => this.ir("/materias/asignacion")}>Asignacion Materia</Button>
                <Button color="inherit" onClick={() => this.ir("/carreras/gestion")}>Carrera</Button>
                <Button color="inherit" onClick={() => this.ir("/materias/gestion")}>Materia</Button></div>*/
export default Menu;