import React, { Component } from "react";
import { Link } from "react-router-dom";
import P5Wrapper from "react-p5-wrapper";
import testSketch from "../sketches/test-sketch";

export default class Home extends Component {
  // onclick function to start rendering moneysketch
  render() {
    return (
      <div>
        <Link className="link" to="/get-equally-paid">
          {" "}
          Let's begin{" "}
        </Link>
        {/* if button is clicked start rendering */}
        <button>Machine Learning Money</button>
        <P5Wrapper sketch={testSketch}></P5Wrapper>
      </div>
    );
  }
}
