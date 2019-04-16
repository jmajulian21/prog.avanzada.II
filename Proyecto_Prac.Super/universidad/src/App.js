import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import MenuContainer from './components/menu/MenuContainer';
import History from './components/home/History';

//
class App extends Component {
  render() {

    return (
      <div>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <MenuContainer/>
            </Grid>
            <Grid item xs={12}>
              <History/>
            </Grid>
          </Grid>
      </div>
    );
  }
}

export default App;
