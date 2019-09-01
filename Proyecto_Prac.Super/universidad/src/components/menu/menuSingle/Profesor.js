import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from "react-router-dom";

class Profesor extends Component {

    ir = to => {
        this.props.history.push(to);
    }

    render() {
        return (
            <div>
                <Button color="inherit" onClick={() => this.ir("/profesores/profesor/notas")}>Registrar Notas</Button>
            </div>
        )
    }
}
export default withRouter(Profesor);