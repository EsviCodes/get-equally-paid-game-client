import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import Money from "./components/Money";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link className="headerLink" to="/">
            <h1>Get Equally Paid Game</h1>
          </Link>
          <div className="header"></div>
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/get-equally-paid" exact component={Game} />
        <Route path="/money-value" exact component={Money} />
        <footer>
          <a className="footerLink" href="https://github.com/EsviCodes">
            Made by Esvi Codes
          </a>
        </footer>
      </div>
    );
  }
}

export default connect()(App);
