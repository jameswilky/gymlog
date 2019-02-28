import React, { Component } from "react";

import Workout from "../workouts/Workout";

class Content extends Component {
  state = {
    workoutSelected: false,
    workouts: [
      {
        id: 1,
        selected: false,
        name: "Pull Day",
        exercises: [
          {
            name: "Deadlift",
            tags: ["Clean", "Slow"],
            sets: [10, 5, 5]
          }
        ]
      },
      {
        id: 2,
        selected: false,
        name: "Leg Day",
        exercises: [
          {
            name: "Squat",
            tags: ["Front", "2ndpin"],
            sets: [5, 5, 5]
          }
        ]
      }
    ]
  };

  selectWorkout = id => {
    const nextState = {
      ...this.state, // Get State
      workouts: this.state.workouts.map(
        (
          workout // Get workouts in state,
          // for each workout in array of workouts
        ) =>
          workout.id === id
            ? (workout.selected = true) // If Matches id, select
            : (workout.selected = false) // Else deslect
      )
    };

    console.log(nextState);

    this.setState({ nextState });
  };
  render() {
    const { workoutSelected, workouts } = this.state;

    return (
      <div className="content">
        <div className="container">
          <h2>Select a Workout</h2>
          {workouts.map(workout => (
            <Workout
              key={workout.id}
              workout={workout}
              selectClickHandler={this.selectWorkout.bind(this, workout.id)}
            />
          ))}
        </div>

        {workoutSelected ? (
          <div className="main__button start">
            <i className="fas fa-play" />
          </div>
        ) : (
          <div className="main__button add">
            <i className="fas fa-plus" />
          </div>
        )}
      </div>
    );
  }
}

export default Content;
