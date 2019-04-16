import React, { Component } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class Menu extends Component {
    render() {
        return(
            <ClickAwayListener>
                 <Paper>
                    <Button>Home</Button>
                    <Button>OpcionA</Button>
                    <Button>OpcionB</Button>
                    <Button>OpcionC</Button>
                 </Paper>
            </ClickAwayListener>
            
        )
    }
}

export default Menu;