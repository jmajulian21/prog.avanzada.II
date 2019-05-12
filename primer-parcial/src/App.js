import React from 'react';
import './App.css';
import Menu from './components/utils/menu/MenuC';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
         <Menu/>
      </Router>
      
    </div>
  );
}

export default App;
