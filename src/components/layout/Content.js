import React, { Component } from "react";

import Workout from "../workouts/Workout";

class Content extends Component {
  state = {
    selectedWorkout: {
      id: null
    },
    workouts: [
      {
        id: 1,
        // selected: false,
        name: "Pull Day",
        exercises: [
          {
            id: 3,
            name: "Deadlift",
            tags: ["Clean", "Slow"],
            sets: [10, 5, 5]
          }
        ]
      },
      {
        id: 2,
        // selected: false,
        name: "Leg Day",
        exercises: [
          {
            id: 4,
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
      // workouts: this.state.workouts.map(
      //   (
      //     workout // Get workouts in state,
      //     // for each workout in array of workouts
      //   ) =>
      //     workout.id === id
      //       ? (workout.selected = true) // If Matches id, select
      //       : (workout.selected = false) // Else deslect
      // ),
      selectedWorkout: this.state.workouts.find(
        // Assign selectedWorkout as the selected workout object
        workout => workout.id == id
      )
    };

    this.setState({ selectedWorkout: nextState.selectedWorkout });
  };

  clearSelections = e => {
    /* Temporary */
    const clickedContainer = e.target.classList.contains("container");
    const clickedContent = e.target.classList.contains("content");

    if (clickedContainer || clickedContent) {
      this.setState({ selectedWorkout: { id: null } });
    }
  };

  render() {
    const { selectedWorkout, workouts } = this.state;

    return (
      <div className="content" onClick={this.clearSelections}>
        <div className="container">
          {selectedWorkout.id ? (
            <h2>Start your Workout!</h2>
          ) : (
            <h2>Select A Workout</h2>
          )}
          {workouts.map(workout => (
            <Workout
              key={workout.id}
              workout={workout}
              selected={selectedWorkout.id == workout.id}
              selectClickHandler={this.selectWorkout.bind(this, workout.id)}
            />
          ))}
        </div>

        {selectedWorkout.id ? (
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
