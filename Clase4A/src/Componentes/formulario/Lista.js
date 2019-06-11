import React, {Component} from "react";
import PropTypes from "prop-types";

class Lista extends Component {
    constructor(props){
        super(props);
    }
    state = {  }
    render() { 
        console.log(this.props);
        return ( 
            <div>
                <ul>
                {
                    this.props.listado.map( (item, i) => {
                        
                        return (
                            <li key={i}>
                                {item}
                            </li>
                        );
                    })
                }
                </ul>
            </div>
         );
    }
}

Lista.propTypes = {
    listado: PropTypes.array.isRequired
}

 Lista.defaultProps = {
     listado: []
 }

export default Lista;