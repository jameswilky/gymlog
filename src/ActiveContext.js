import React, { Component } from "react";
import uuid from "uuid";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_WORKOUT": {
      console.log("Loaded");
      return {
        ...state
        // workout: action.payload
      };
    }
    case "ADD_EXERCISE": {
      const newExercise = {
        id: uuid(),
        name: "New Exercise",
        sets: [5, 5, 5],
        tags: ["test", "test"]
      };
      return {
        ...state, // Get State
        workout: {
          //Assign workout to
          ...state.workout, //Get workout
          exercises: [...state.workout.exercises, newExercise] // assign exercises to current exercise state, appended with new exercise
        }
      };
    }
    default:
      return state;
  }
};
class Provider extends Component {
  state = {
    workout: { id: null, name: "", exercises: [] },
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
export const ActiveProvider = Provider;
export const ActiveConsumer = Context.Consumer;
