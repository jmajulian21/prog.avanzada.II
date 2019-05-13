import React from 'react';
import './App.css';
import Menu from './components/utils/menu/MenuC';
import {BrowserRouter as Router} from 'react-router-dom';
import Tabla from './components/utils/tabla/TablaC';

let menuItems = [{id:1,label:"Listar",url:"/personas"},
                 {id:2,label:"Cargar",url:"/personas/alta"}]

let headers = ["Id","Nombre","Email","Sueldo","Editar","Eliminar"]

let rows = [{id:1,nombre:"Julian M.",email:"julian.moreno@hotmail.com",sueldo:"23432"},
            {id:2,nombre:"Hernan P.",email:"julian.moreno@hotmail.com",sueldo:"27000"}]

function App() {
  return (
    <div>
      <Router>
         <Menu items={menuItems}/>
      </Router>
    </div>
  );
}
<Tabla headers={headers} rows={rows}/>
export default App;
