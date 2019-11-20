import React, { Component } from "react";
import moneySketch from "../sketches/money-sketch";
import P5Wrapper from "react-p5-wrapper";
import { Link } from "react-router-dom";

export default class Money extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button onClick={this.onClick}>Go Home</button>
        </Link>
        <br></br>
        <br></br>
        <P5Wrapper sketch={moneySketch}></P5Wrapper>
      </div>
    );
  }
}
