import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default class Contenedor extends React.Component {
    render() {

        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar variant="dense">
                    {
                        this.props.children
                    }
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

/*
{
    this.props.children
}
 */