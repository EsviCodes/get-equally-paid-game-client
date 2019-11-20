import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
import Game from "./components/Game";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/get-equally-paid" exact component={Game} />
      </div>
    );
  }
}

export default connect()(App);
