import React, { Component } from 'react';
import { Button} from '@material-ui/core';

class Secretaria extends Component {
    render() {
        return (
            <div>
                <Button color="inherit" onClick={() => this.ir("/asistencias")}>Asistencias</Button>
                <Button color="inherit" onClick={() => this.ir("/consulta/materias")}>Consulta Materia</Button>
            </div>
        )
    }
}
export default Secretaria;