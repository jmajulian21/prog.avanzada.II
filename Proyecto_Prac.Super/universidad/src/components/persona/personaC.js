import React, { Component } from 'react';
import Persona from './persona';

class PersonaC extends Component {
  render() {
    return (
      <div>
          <Persona {...this.props}/>  
      </div>
    );
  }
}

export default PersonaC;