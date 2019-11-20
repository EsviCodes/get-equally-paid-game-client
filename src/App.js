import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
import Game from "./components/Game";
import Info from "./components/Info";
import Money from "./components/Money";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Get Equally Paid Game</h1>
          <div className="header"></div>
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/get-equally-paid" exact component={Game} />
        <Route path="/closing-the-gap" exact component={Info} />
        <Route path="/money-value" exact component={Money} />
        <footer>Made by Esvi Codes</footer>
      </div>
    );
  }
}

export default connect()(App);
