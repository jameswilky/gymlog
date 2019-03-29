import React, { Component } from "react";

import WorkoutContainer from "./WorkoutContainer";
import uuid from "uuid";
import { Consumer } from "../../Context";
import { Link, Redirect } from "react-router-dom";
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

  containsWorkouts = workouts => {
    return typeof workouts !== "undefined" && workouts.length > 0;
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, workouts, selectedWorkout } = value;

          return (
            <React.Fragment>
              {console.log(this)}
              {this.containsWorkouts(workouts) ? (
                <div
                  className="content"
                  onClick={e => this.clearSelections(e, dispatch)}
                >
                  <div className="contentHeading">
                    {this.containsWorkouts(workouts) ? (
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
                          pathname: `/gymlog/active/${this.state.nextID}`
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
                          dispatch({
                            type: "DELETE_WORKOUT",
                            payload: { id: selectedWorkout.id }
                          })
                        }
                      >
                        <i className="fa fa-trash" />
                      </div>
                    </React.Fragment>
                  ) : (
                    <Link to="/gymlog/new">
                      <div className="main__button red">
                        <i className="fas fa-plus" />
                      </div>
                    </Link>
                  )}
                </div>
              ) : (
                <Redirect to="/gymlog/new" />
              )}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default WorkoutLauncher;
