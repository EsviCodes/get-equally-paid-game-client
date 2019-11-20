import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import gameSketch from "../sketches/game-sketch";

export default class Game extends Component {
  render() {
    return (
      <div>
        <P5Wrapper sketch={gameSketch}></P5Wrapper>
      </div>
    );
  }
}
