import React, { Component } from "react";

import Workout from "../workouts/Workout";
import AddWorkout from "../workouts/AddWorkout";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="container">
          <h2>Select a Workout</h2>
          <Workout />
          <AddWorkout />
        </div>
        <div className="content__add ">
          <i className="fas fa-play" />
        </div>
      </div>
    );
  }
}

export default Content;
