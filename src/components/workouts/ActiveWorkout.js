import React, { Component } from "react";
import { ActiveConsumer } from "../../ActiveContext";
import ActiveExercise from "../exercises/ActiveExercise";
import uuid from "uuid";

class ActiveWorkout extends Component {
  render() {
    return (
      <ActiveConsumer>
        {value => {
          const { exercises, name } = value;
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
                    // onClick={() => {
                    //   dispatch({ type: "ADD_EXERCISE", payload: null });
                    // }}
                  >
                    <i className="fas fa-plus"> </i>
                    Add Exercise
                  </button>
                </div>

                <div className="main__button green">
                  <i className="fas fa-flag-checkered" />
                </div>
              </div>
            </div>
          );
        }}
      </ActiveConsumer>
    );
  }
}

export default ActiveWorkout;
