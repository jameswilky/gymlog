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
              <div className="container">
                <div>{/* <h1>{name}</h1> */}</div>
                <Workout
                  exercises={workout.exercises}
                  id={workout.id}
                  isActive={true}
                  dispatch={dispatch}
                />
                <Link to={{ pathname: "https://jameswilky.github.io/gymlog" }}>
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

export default WorkoutViewer;
