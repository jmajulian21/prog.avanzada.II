import React, { Component } from 'react';
import { Button} from '@material-ui/core';
import { withRouter } from "react-router-dom";

class Secretaria extends Component {

    ir = to => {
        this.props.history.push(to);
    }

    render() {
        return (
            <div>
                <Button color="inherit" onClick={() => this.ir("/asistencias")}>Asistencias</Button>
                <Button color="inherit" onClick={() => this.ir("/consulta/materias")}>Consulta Materia</Button>
            </div>
        )
    }
}
export default withRouter(Secretaria);