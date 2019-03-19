import React, { Component } from "react";
import { Consumer } from "../../Context";
import Exercise from "../exercises/Exercise";
import uuid from "uuid";
import { Link } from "react-router-dom";
import TestWorkout from "./TestWorkout";

class ActiveWorkout extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { activeWorkout, dispatch } = value;
          const { exercises } = activeWorkout;

          return (
            <div className="content">
              <div className="container">
                <div>{/* <h1>{name}</h1> */}</div>
                {/* <div className="card__body" style={{ paddingRight: "0px" }}>
                  {exercises.map(exercise => (
                    <Exercise
                      key={exercise.id}
                      exercise={exercise}
                      isActive={true}
                    />
                  ))}
                </div>
                <div className="card__footer">
                  <button
                    className="card__add"
                    onClick={() => {
                      dispatch({
                        type: "ADD_EXERCISE",
                        payload: { isActive: true }
                      });
                    }}
                  >
                    <i className="fas fa-plus"> </i>
                    Add Exercise
                  </button>
                </div> */}
                <TestWorkout
                  exercises={exercises}
                  id={activeWorkout.id}
                  isActive={true}
                  dispatch={dispatch}
                />
                <Link to={{ pathname: "/" }}>
                  <div
                    className="main__button green"
                    // onClick={() => {
                    //   dispatch({
                    //     type: "SAVE_WORKOUT",
                    //     payload: activeWorkout
                    //   });
                    // }}
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
