import React, { Component } from "react";
import { Consumer } from "../../Context";
import ActiveExercise from "../exercises/ActiveExercise";
import uuid from "uuid";
import { Link } from "react-router-dom";

class ActiveWorkout extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { activeWorkout, dispatch } = value;
          const { name, exercises } = activeWorkout;
          return (
            <div className="content">
              <div className="container">
                <div>{/* <h1>{name}</h1> */}</div>
                <div className="card__body" style={{ paddingRight: "0px" }}>
                  {exercises.map(exercise => (
                    <ActiveExercise key={exercise.id} exercise={exercise} />
                  ))}
                </div>
                <div className="card__footer">
                  <button
                    className="card__add"
                    onClick={() => {
                      dispatch({
                        type: "ADD_EXERCISE_TO_INSTANCE",
                        payload: null
                      });
                    }}
                  >
                    <i className="fas fa-plus"> </i>
                    Add Exercise
                  </button>
                </div>
                <Link to={{ pathname: "/" }}>
                  <div
                    className="main__button green"
                    onClick={() => {
                      dispatch({ type: "SAVE_WORKOUT", payload: null });
                    }}
                  >
                    <i className="fas fa-flag-checkered" />
                  </div>
                </Link>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ActiveWorkout;