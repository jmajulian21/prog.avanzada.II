import React, { Component } from 'react';
import { Grid,Button,Toolbar,AppBar } from '@material-ui/core';

class Menu extends Component {
    
    ir = to => {
        this.props.history.push(to);
    }

    render() {
        return(
                <AppBar position="static">
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={11}>
                                <Button color="inherit" onClick={() => this.ir("/inicio")}>Inicio</Button>
                                <Button color="inherit" onClick={() => this.ir("/history")} >Historia</Button>
                                <Button color="inherit" onClick={() => this.ir("/alumnos/gestion")} >Alumno</Button>
                                <Button color="inherit" onClick={() => this.ir("/profesores/gestion")} >Profesor</Button>
                                <Button color="inherit" onClick={() => this.ir("/asistencias")}>Asistencias</Button>
                                <Button color="inherit" onClick={() => this.ir("/consulta/materias")}>Consulta Materia</Button>
                                <Button color="inherit" onClick={() => this.ir("/profesores/profesor/notas")}>Registrar Notas</Button>
                                
                            </Grid>
                            <Grid item xs={1}>
                                <Button color="inherit" href='/login'>Login</Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
        )
    }
}


export default Menu;