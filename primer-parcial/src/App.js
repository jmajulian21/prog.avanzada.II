import React from 'react';
import './App.css';
import Menu from './components/utils/menu/MenuC';
import {BrowserRouter as Router} from 'react-router-dom';
import Urls from './components/utils/urls/Urls'

let menuItems = [{id:1,label:"Listar",url:"/personas"},
                 {id:2,label:"Cargar",url:"/personas/alta"}]

function App() {
  return (
    <div>
      <Router>
         <Menu items={menuItems}/>
         <Urls/>
      </Router>
    </div>
  );
}

export default App;
