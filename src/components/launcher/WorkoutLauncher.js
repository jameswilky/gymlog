import React, { Component } from "react";

import WorkoutContainer from "./WorkoutContainer";
import uuid from "uuid";
import { Consumer } from "../../Context";
import { Link } from "react-router-dom";
import styles from "./workoutLauncher.module.css";

class WorkoutLauncher extends Component {
  state = { nextID: uuid(), showModal: false };

  clickIsOutside = e => {
    const clickedContainer = e.target.classList.contains("container");
    const clickedContent = e.target.classList.contains("content");
    return clickedContainer || clickedContent;
  };

  clearSelections = (e, dispatch) => {
    if (this.clickIsOutside(e)) {
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
                    <WorkoutContainer
                      key={workout.id}
                      workout={workout}
                      selected={selectedWorkout.id == workout.id}
                    />
                  ))}
                </div>
              </div>

              {selectedWorkout.id ? (
                <React.Fragment>
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
                  <div
                    className="alt__button red"
                    onClick={() =>
                      dispatch({ type: "DELETE_WORKOUT", payload: null })
                    }
                  >
                    <i className="fa fa-trash" />
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Link to="/new">
                    <div className="main__button red">
                      <i className="fas fa-plus" />
                    </div>
                  </Link>
                </React.Fragment>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default WorkoutLauncher;
