import React, { Component } from "react";
import { Link } from "react-router-dom";
import P5Wrapper from "react-p5-wrapper";
import testSketch from "../sketches/test-sketch";

export default class Home extends Component {
  // onclick function to start rendering moneysketch
  state = {
    money: false
  };

  onClick = () => {
    console.log("I'm clicked");
    this.setState({
      money: true
    });
  };

  stopML = () => {
    console.log("I'm clicked");
    this.setState({
      money: false
    });
  };

  render() {
    return (
      <div>
        <Link className="link" to="/get-equally-paid">
          {" "}
          Let's begin{" "}
        </Link>
        {/* if button is clicked start rendering */}

        {this.state.money ? (
          <div>
            <button onClick={this.stopML}>Stop</button>
            <P5Wrapper sketch={testSketch}></P5Wrapper>
          </div>
        ) : (
          <div>
            <button onClick={this.onClick}>Machine Learning Money</button>
          </div>
        )}
      </div>
    );
  }
}
