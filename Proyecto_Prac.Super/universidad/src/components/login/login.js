import React, { Component } from 'react';
import { Dialog,DialogActions,DialogContent,
         DialogContentText,DialogTitle,TextField,Button} from '@material-ui/core';

class Login extends Component{
    state = {
        open: true,
      };
    
      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

    render(){
        return(
            <div>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" id="name" label="Email o Usuario" type="email" fullWidth/>
                    <TextField autoFocus margin="dense" id="name" label="Contraseña" type="Password" fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                    Cerrar
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                    Logear
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Login;