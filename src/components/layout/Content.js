import React, { Component } from "react";

import Workout from "../workouts/Workout";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="container">
          <Workout />
        </div>
        <div className="content__add ">
          <i className="fas fa-play" />
        </div>
      </div>
    );
  }
}

export default Content;
