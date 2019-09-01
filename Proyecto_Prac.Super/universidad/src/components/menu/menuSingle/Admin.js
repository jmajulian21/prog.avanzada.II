import React, { Component } from 'react';
import { Button} from '@material-ui/core';

class Admin extends Component {
    render() {
        return (
            <div>
                 <Button color="inherit" >Alumno</Button>
                 <Button color="inherit" >Profesor</Button>
                 <Button color="inherit" >Asignacion Materia</Button>
             </div>
        )
    }
}
export default Admin;