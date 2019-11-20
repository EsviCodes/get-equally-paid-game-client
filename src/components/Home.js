import React, { Component } from "react";
import { Link } from "react-router-dom";
import P5Wrapper from "react-p5-wrapper";
import testSketch from "../sketches/test-sketch";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link className="link" to="/get-equally-paid">
          {" "}
          Let's begin{" "}
        </Link>
        <P5Wrapper sketch={testSketch}></P5Wrapper>
      </div>
    );
  }
}
