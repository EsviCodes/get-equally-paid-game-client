import React, { Component } from "react";
import moneySketch from "../sketches/money-sketch";
import P5Wrapper from "react-p5-wrapper";

export default class Money extends Component {
  render() {
    return (
      <div>
        <p>Money Value </p>
        <P5Wrapper sketch={moneySketch}></P5Wrapper>
      </div>
    );
  }
}
