import React, { Component } from "react";

import Workout from "../workouts/Workout";
import uuid from "uuid";
import { Consumer } from "../../Context";
import { Link } from "react-router-dom";

class WorkoutLauncher extends Component {
  state = { nextID: uuid() };
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
              <div className="contentHeading">
                {this.containsWorkouts.bind(this) ? (
                  selectedWorkout.id ? (
                    <h2>Start your Workout!</h2>
                  ) : (
                    <h2>Select A Workout</h2>
                  )
                ) : (
                  <h2>Create a Workout</h2>
                )}
              </div>
              <div className="contentBody">
                <div className="container">
                  {workouts.map(workout => (
                    <Workout
                      key={workout.id}
                      workout={workout}
                      selected={selectedWorkout.id == workout.id}
                    />
                  ))}
                </div>
              </div>

              {selectedWorkout.id ? (
                <Link
                  to={{
                    pathname: `/active/${this.state.nextID}`
                  }}
                >
                  <div
                    className="main__button green"
                    onClick={() =>
                      dispatch({
                        type: "LOAD_WORKOUT",
                        payload: this.state.nextID
                      })
                    }
                  >
                    {" "}
                    <i className="fas fa-play" />
                  </div>
                </Link>
              ) : (
                <div
                  className="main__button red"
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
