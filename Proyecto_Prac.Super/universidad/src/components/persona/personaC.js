import React, { Component } from 'react';
import Persona from './persona';

class PersonaC extends Component {
  render() {
    return (
      <Persona item={this.props.item}/>  
    );
  }
}

export default PersonaC;