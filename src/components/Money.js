import React, { Component } from "react";
import moneySketch from "../sketches/money-sketch";
import P5Wrapper from "react-p5-wrapper";
import { Link } from "react-router-dom";

export default class Money extends Component {
  render() {
    return (
      <div>
        <h2>First, we check the value of banknotes</h2>
        <P5Wrapper sketch={moneySketch}></P5Wrapper>
        <br></br>
        <br></br>
        <Link className="link" to="/get-equally-paid">
          <button>Next: Start Game</button>
        </Link>
      </div>
    );
  }
}
