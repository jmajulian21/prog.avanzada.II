import React, { Component } from "react";
import OrderCard from "./components/OrderCard/OrderCard";
import logo from "./images/logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-main">
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </main>
      </div>
    );
  }
}

export default App;
