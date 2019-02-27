import React, { Component } from "react";

import Exercises from "../exercises/Exercise";
import Exercise from "../exercises/Exercise";

class AddWorkout extends Component {
  createWorkoutTemplate() {
    console.log("Open Workout Template Form");
  }
  render() {
    return (
      <div className="card">
        <div className="card__header">
          <div />
          <div>
            <h2>Create Workout</h2>
          </div>
          <div>
            <i
              className="fas fa-plus"
              onClick={() => this.createWorkoutTemplate()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddWorkout;
