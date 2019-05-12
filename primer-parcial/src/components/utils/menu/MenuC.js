import React, { Component } from 'react';
import Menu from './Menu';
import { withRouter } from "react-router-dom";

let menuItems = [{id:1,label:"ITEM1",url:""},
                 {id:2,label:"ITEM2",url:"sa"},
                 {id:3,label:"ITEM3",url:"asd"}]

class MenuC extends Component {
    render() {
        return(
            <Menu items={menuItems} {...this.props}/>
        )
    }
}

export default withRouter(MenuC);