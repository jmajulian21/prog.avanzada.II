import React, { Component } from 'react';
import { Grid,TextField } from '@material-ui/core';

class Persona extends Component {
  render() {
    
    return (
      <div style={{ padding: 10}}>
          <Grid container direction="column">
            <Grid item xs={10}>
                <TextField></TextField>
            </Grid>
          </Grid>
      </div>
    );
  }
}

export default Persona;