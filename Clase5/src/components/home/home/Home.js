import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Error from "../../error/Error";
const Marcas = () => <h1>Marca</h1>
const Productos = () => <h1>Productos</h1>

class Home extends Component {
    render(){

        return(
            <div>
                <h1>Home</h1>
                <Switch>
                    <Route exact path='/home/marcas' component={Marcas}/>
                    <Route exact path='/home/productos/:marca' component={Error}/>
                    <Redirect to='/inicio'/>
                </Switch>
            </div>
        );
    }
}

export default Home;