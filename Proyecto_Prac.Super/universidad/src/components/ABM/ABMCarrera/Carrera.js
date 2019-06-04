import React, { Component } from 'react';
import { Grid, TextField,Button} from '@material-ui/core';


let i = 0;
var d = new Date();

class Carrera extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: 0 ,
            carrera: null ,
            fechaAlta: null ,
        }
        this.onClickEnviar = this.onClickEnviar.bind(this);
    }

    handleChange = (e, prop) => {
        let valor = e.target.value;
        this.setState({ [prop]: valor });
    }

    
    onClickEnviar = ()  =>{
        i += 1;

        this.props.onAdd(i, this.state.carrera, this.state.fechaAlta);
    }

    render() {
        return (
            <Grid container direction="column" spacing={0}>
            <Grid item xs={9}>
              <h3>Carrera</h3>
              <TextField id="standard-uncontrolled" label="Carrera" value={this.state.carrera} onChange={e => this.handleChange(e,"carrera")}/>
              <TextField variant='outlined' id="date" label="Fecha Alta" type="date" InputLabelProps={{shrink: true,}} value={this.state.fechaAlta} onChange={e => this.handleChange(e,"fechaAlta")}/>
              <Button variant="contained" onClick={this.onClickEnviar}>Cargar</Button>
            </Grid>
          </Grid>
        )
    }
}

export default Carrera;

