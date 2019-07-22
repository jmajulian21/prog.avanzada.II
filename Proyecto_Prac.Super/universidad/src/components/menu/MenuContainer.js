import React, { Component } from 'react';
import Menu from './Menu';
import { withRouter } from "react-router-dom";

class MenuContainer extends Component {
    refresh = () =>{
        console.log(this.props.user);
      }

    render() {
        

        return(
            <Menu {...this.props} refresh={this.refresh}/>
        )
    }
}

export default withRouter(MenuContainer);