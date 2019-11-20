import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link className="link" to="/get-equally-paid">
          <button>Let's play a game</button>
        </Link>
      </div>
    );
  }
}
