import React, { Component } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
/*import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
<MenuList>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>OpcionA</MenuItem>
                        <MenuItem>OpcionB</MenuItem>
                        <MenuItem>OpcionC</MenuItem>
                    </MenuList>*/
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