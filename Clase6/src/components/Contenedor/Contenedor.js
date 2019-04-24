import React from "react";
import "./style.css";

export default class Contenedor extends React.Component {



    render() {

        return (
            <div>
                {
                    // this.props.children.map(item => {
                    //     console.log(item)
                    //     return item
                    // })
                    this.props.children
                }
            </div>
        )
    }
}