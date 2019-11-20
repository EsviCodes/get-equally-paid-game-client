import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Get Equally Paid Game</h1>
        <Link to="/get-equally-paid"> Let's begin </Link>
      </div>
    );
  }
}
