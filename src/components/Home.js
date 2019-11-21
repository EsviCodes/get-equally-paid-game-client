import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <p className="facts">
          The difference between the hourly wage of men and women in the
          Netherlands is on average 15%.
          <br></br>
          <br></br>
          This is €300.000,- in a working life that women earn less than men.
          <br></br>
          <br></br>In the Dutch tech field it's worse with a 18,6% difference.
          <br></br>
          <br></br>
          November 6 2019 was Equal Pay Day. This means that women work for free
          the rest of the year.
          <br></br>
          <br></br>
          So...
        </p>
        <Link className="link" to="/get-equally-paid">
          <button>Let's play a game</button>
        </Link>
      </div>
    );
  }
}
