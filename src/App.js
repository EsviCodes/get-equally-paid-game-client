import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
      </div>
    );
  }
}

export default connect()(App);
