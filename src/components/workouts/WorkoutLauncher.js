import React, { Component } from "react";

import Workout from "../workouts/Workout";
import uuid from "uuid";

class WorkoutLauncher extends Component {
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
    this.setState({
      ...this.state, // Get State
      selectedWorkout: this.state.workouts.find(
        // Assign selectedWorkout as the selected workout object
        workout => workout.id == id
      )
    });
  };

  addExercise = id => {
    const newExercise = {
      id: uuid(),
      name: "Exercise Name",
      tags: [],
      sets: []
    };

    this.setState({
      ...this.state, //Get State
      // Assign workouts array with in state
      workouts: this.state.workouts.map(workout =>
        //For each workout in the workouts array, check if the id matches
        workout.id === id
          ? // If it does, return an object that:
            /* 
        1. Gets the matched workout object with "...workout",
        2. Assigns exercises array in the work out object to:
        3. An Array that gets the exercise array and then concatonates the new exercise object
        */
            { ...workout, exercises: [...workout.exercises, newExercise] }
          : // Otherwise, assign the workout object to its previous state
            workout
      )
    });
  };

  addWorkout = () => {
    const newWorkout = {
      id: uuid(),
      name: "New Workout",
      exercises: []
    };

    this.setState({
      ...this.state,
      workouts: [...this.state.workouts, newWorkout]
    });
  };

  deleteWorkout = id => {
    this.setState({
      ...this.state,
      workouts: this.state.workouts.filter(workout => workout.id != id)
    });
  };
  clearSelections = e => {
    /* Temporary */
    const clickedContainer = e.target.classList.contains("container");
    const clickedContent = e.target.classList.contains("content");

    if (clickedContainer || clickedContent) {
      this.setState({ selectedWorkout: { id: null } });
    }
  };

  containsWorkouts = () => {
    return (
      typeof this.state.workouts !== "undefined" &&
      this.state.workouts.length > 0
    );
  };

  render() {
    const { selectedWorkout, workouts } = this.state;

    return (
      <div className="content" onClick={this.clearSelections}>
        <div className="container">
          {this.containsWorkouts() ? (
            selectedWorkout.id ? (
              <h2>Start your Workout!</h2>
            ) : (
              <h2>Select A Workout</h2>
            )
          ) : (
            <h2>Create a Workout</h2>
          )}

          {workouts.map(workout => (
            <Workout
              key={workout.id}
              workout={workout}
              selected={selectedWorkout.id == workout.id}
              selectClickHandler={this.selectWorkout.bind(this, workout.id)}
              addExerciseHandler={this.addExercise.bind(this, workout.id)}
              deleteWorkoutHandler={this.deleteWorkout.bind(this, workout.id)}
            />
          ))}
        </div>

        {selectedWorkout.id ? (
          <div className="main__button start">
            <i className="fas fa-play" />
            {/* Will Start workout */}
          </div>
        ) : (
          <div className="main__button add" onClick={this.addWorkout}>
            <i className="fas fa-plus" />
          </div>
        )}
      </div>
    );
  }
}

export default WorkoutLauncher;
