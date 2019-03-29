import React, { Component } from "react";
import { Consumer } from "../../Context";
import Workout from "./Workout";
import { Link } from "react-router-dom";

class WorkoutViewer extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { workout } = this.props;
          console.log(workout);
          return (
            <div className="content">
              <div className="contentHeading">
                <h1>{workout.name}</h1>
              </div>

              <div className="container">
                <Workout
                  exercises={workout.exercises}
                  id={workout.id}
                  isActive={true}
                  dispatch={dispatch}
                  name={workout.name}
                />
              </div>
              <Link to={{ pathname: "/" }}>
                <div className="main__button green">
                  <i className="fas fa-flag-checkered" />
                </div>
              </Link>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default WorkoutViewer;
