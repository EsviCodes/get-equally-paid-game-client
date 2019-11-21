import React, { Component } from "react";
import moneySketch from "../sketches/money-sketch";
import P5Wrapper from "react-p5-wrapper";

export default class Money extends Component {
  render() {
    return (
      <div>
        <a href="https://vijftienprocent.nl/magazine/women-inc-zo-werkt-het/cover/">
          <button>Read what you as employer can do (Dutch)</button>
        </a>
        <br></br>
        <br></br>
        <P5Wrapper sketch={moneySketch}></P5Wrapper>
      </div>
    );
  }
}
