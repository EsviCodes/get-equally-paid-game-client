import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <p className="facts">
          The difference between the hourly wage of men and women in the
          Netherlands is on average <strong>15%</strong>.<br></br>
          <br></br>
          This is <strong>€300.000,-</strong> in a working life that women earn
          less than men.
          <br></br>
          <br></br>In the Dutch tech field it's worse with a difference of{" "}
          <strong>18,6%, based on a research in 2018</strong>.<br></br>
          <br></br>
          <strong>November 6 2019</strong> was Equal Pay Day. This means that
          after this day women work for free for the rest of the year.
          <br></br>
          <br></br>
          So...
        </p>
        <Link className="link" to="/money-value">
          <button>Let's play a game</button>
        </Link>
      </div>
    );
  }
}
