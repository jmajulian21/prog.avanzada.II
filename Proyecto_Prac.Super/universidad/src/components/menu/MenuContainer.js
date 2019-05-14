import React, { Component } from 'react';
import Menu from './Menu';
import { withRouter } from "react-router-dom";

class MenuContainer extends Component {
    render() {
        return(
            <Menu {...this.props}/>
        )
    }
}

export default withRouter(MenuContainer);