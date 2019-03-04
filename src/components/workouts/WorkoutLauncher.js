import React, { Component } from "react";

import Workout from "../workouts/Workout";
import uuid from "uuid";
import { Consumer } from "../../context";

class WorkoutLauncher extends Component {
  deleteExercise = id => {};

  // deleteWorkout = id => {
  //   this.setState({
  //     ...this.state,
  //     workouts: this.state.workouts.filter(workout => workout.id != id)
  //   });
  // };

  clearSelections = (e, dispatch) => {
    /* Temporary */
    const clickedContainer = e.target.classList.contains("container");
    const clickedContent = e.target.classList.contains("content");
    if (clickedContainer || clickedContent) {
      dispatch({ type: "DESELECT_WORKOUT", payload: null });
    }
  };

  containsWorkouts = () => {
    return typeof this.workouts !== "undefined" && this.workouts.length > 0;
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, workouts, selectedWorkout } = value;
          return (
            <div
              className="content"
              onClick={e => this.clearSelections(e, dispatch)}
            >
              <div className="container">
                {this.containsWorkouts.bind(this) ? (
                  selectedWorkout.id ? (
                    <h2>Start your Workout!</h2>
                  ) : (
                    <h2>Select A Workout</h2>
                  )
                ) : (
                  <h2>Create a Workout</h2>
                )}

                {workouts.map(workout => (
                  <Workout
                    key={workout.id}
                    workout={workout}
                    selected={selectedWorkout.id == workout.id}
                  />
                ))}
              </div>

              {selectedWorkout.id ? (
                <div className="main__button start">
                  <i className="fas fa-play" />
                </div>
              ) : (
                <div
                  className="main__button add"
                  onClick={() =>
                    dispatch({ type: "ADD_WORKOUT", payload: null })
                  }
                >
                  <i className="fas fa-plus" />
                </div>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default WorkoutLauncher;
