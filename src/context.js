import React, { Component } from "react";
import uuid from "uuid";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_WORKOUT":
      const newWorkout = {
        id: uuid(),
        name: "New Workout",
        exercises: []
      };
      return {
        ...state,
        workouts: [...state.workouts, newWorkout]
      };
    case "SELECT_WORKOUT":
      return {
        ...state, // Get State
        selectedWorkout: state.workouts.find(
          // Assign selectedWorkout as the selected workout object
          workout => workout.id == action.payload.id
        )
      };

    case "DESELECT_WORKOUT":
      return {
        ...state,
        selectedWorkout: { id: null }
      };

    case "ADD_EXERCISE":
      const newExercise = {
        id: uuid(),
        name: "New Exercise",
        tags: [],
        sets: []
      };

      return {
        ...state, //Get State
        // Assign workouts array with in state
        workouts: state.workouts.map(workout =>
          //For each workout in the workouts array, check if the id matches
          workout.id === action.payload.id
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
      };
    default:
      return state;
  }
};
export default class Provider extends Component {
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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
