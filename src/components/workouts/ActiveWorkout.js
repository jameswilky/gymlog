import React, { Component } from "react";
import { Consumer } from "../../context";
import Exercise from "../exercises/Exercise";

class ActiveWorkout extends Component {
  state = {
    timer: null
  };

  render() {
    const { exercises, id, name } = this.props.location.state.workout;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="content">
              <div className="container">
                <div className="card__body" style={{ paddingRight: "0px" }}>
                  {exercises.map(exercise => (
                    <Exercise key={exercise.id} exercise={exercise} />
                  ))}
                </div>
                <div className="card__footer">
                  <button className="card__add">
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
      </Consumer>
    );
  }
}

export default ActiveWorkout;
