import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import gameSketch from "../sketches/game-sketch";
import { Link } from "react-router-dom";

export default class Game extends Component {
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
        <Link to="/money-value">
          <button onClick={this.onClick}>Ask machine the value of money</button>
        </Link>

        <div className="content">
          <div className="sketch">
            <P5Wrapper sketch={gameSketch}></P5Wrapper>
          </div>
          <div className="rules">
            <h2>Rules of the Game</h2>
            <p>The rules of this game are simple:</p>
            <ul>
              <li>
                You are the rectangle (employee) in the middle of the board
              </li>
              <li>
                As an employee, you need to work. Work by pressing the keys to
                go up, down, left or right
              </li>
              <li>
                You want to get payed for your work. In order to get paid,
                collected the green rectangle to get payed for your work
              </li>
              <li>Don't get burned-out by hitting the borders or yourself</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
