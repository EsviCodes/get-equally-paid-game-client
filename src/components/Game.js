import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import gameSketch from "../sketches/game-sketch";

export default class Game extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="sketch">
            <P5Wrapper sketch={gameSketch}></P5Wrapper>
          </div>
          <div className="rules">
            <h2>Rules of the Game</h2>
            <p>This game is based on the classic Snake game</p>
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
