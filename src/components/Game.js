import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import gameSketch from "../sketches/game-sketch";

export default class Game extends Component {
  render() {
    return (
      <div>
        <a href="https://vijftienprocent.nl/magazine/women-inc-zo-werkt-het/cover/">
          <button>Read what you as employer can do (Dutch)</button>
        </a>
        <div className="content">
          <div className="sketch">
            <P5Wrapper sketch={gameSketch}></P5Wrapper>
          </div>
          <div className="rules">
            <h2>In this game we re-enact working life</h2>
            <p>The rules of this game are simple:</p>
            <ol>
              <li>You are the employee in the middle of the board.</li>
              <li>
                Work by pressing the keys (↑, ↓, →, ←) to move to your paycheck
                (green rectangle). You grow with experience every time you
                collect money.
              </li>
              <li>Don't get burned-out by running into the wall or yourself</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
