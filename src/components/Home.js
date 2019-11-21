import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="facts">
        <h2>Once Upon a Time in the Netherlands...</h2>
        <ul className="factList">
          <li>
            ...the difference between the hourly wage of men and women is on
            average <strong>15%</strong>.
          </li>
          <li>
            This is <strong>€300.000,-</strong> in a working life that women
            earn less than men.
          </li>
          <li>
            In the Dutch tech field it's worse with a difference of{" "}
            <strong>18,6%</strong> (2018)
          </li>
          <li>
            <strong>November 6 2019</strong> was Equal Pay Day. This means that
            after this day women work for free for the rest of the year.
          </li>
        </ul>
        So...{" "}
        <Link className="link" to="/money-value">
          <button>Let's play a game</button>
        </Link>
      </div>
    );
  }
}
