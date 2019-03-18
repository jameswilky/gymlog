import React, { Component } from "react";
import uuid from "uuid";

const Context = React.createContext();

const reducer = (state, action) => {
  const updateActiveExercise = (func, target) => {
    return {
      activeWorkout: {
        ...state.activeWorkout,
        exercises: state.activeWorkout.exercises.map(exercise => {
          // map each exercise within that workout if:
          // the exercise matches the payload
          return exercise.id === action.payload.id
            ? {
                ...exercise,
                [target]: func(exercise)
              }
            : // Otherwise, return an unmodifed exercise object
              exercise;
        })
      }
    };
  };
  const updateExercise = (func, target) => {
    // Helper function to find set nested in state
    return {
      ...state, // Get state
      workouts: state.workouts.map((
        workout // Map Each workout in workouts array if:
      ) =>
        // The exercises within the workout contiain an exercise which matches target ID
        workout.exercises.some(exercise => exercise.id === action.payload.id)
          ? {
              // Then,
              ...workout, //get that workout
              exercises: workout.exercises.map(exercise => {
                // map each exercise within that workout if:
                // the exercise matches the payload
                return exercise.id === action.payload.id
                  ? {
                      ...exercise,
                      [target]: func(exercise)
                    }
                  : // Otherwise, return an unmodifed exercise object
                    exercise;
              })
            }
          : // Otherwise, return an unmodifed workout object
            workout
      )
    };
  };
  const selectWorkout = () => {
    return {
      ...state, // Get State
      selectedWorkout: state.workouts.find(
        // Assign selectedWorkout as the selected workout object
        workout => workout.id == action.payload.id
      )
    };
  };

  switch (action.type) {
    case "ADD_WORKOUT": {
      const newWorkout = {
        id: uuid(),
        name: "New Workout",
        exercises: []
      };
      return {
        ...state,
        workouts: [...state.workouts, newWorkout]
      };
    }
    case "UPDATE_WORKOUT_NAME": {
      return {
        ...state,
        workouts: state.workouts.map(workout => {
          return workout.id === action.payload.id
            ? { ...workout, name: action.payload.name }
            : workout;
        })
      };
    }
    case "SELECT_WORKOUT": {
      return selectWorkout();
    }
    case "DESELECT_WORKOUT": {
      return {
        ...state,
        selectedWorkout: { id: null }
      };
    }
    case "ADD_EXERCISE": {
      const newExercise = {
        id: uuid(),
        name: "New Exercise",
        tags: [],
        sets: [],
        weight: []
      };

      switch (action.payload.isActive) {
        case true: {
          return {
            activeWorkout: {
              ...state.activeWorkout, //get that workout
              exercises: [...state.activeWorkout.exercises, newExercise]
            }
          };
        }
        default: {
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
        }
      }
    }
    case "UPDATE_EXERCISE_NAME": {
      const update = () => {
        return action.payload.name;
      };
      switch (action.payload.isActive) {
        case true: {
          return { ...state }; // Do Not want to be able to change active exercise name
        }
        default:
          return updateExercise(update, "name");
      }
    }
    case "DELETE_EXERCISE": {
      switch (action.payload.isActive) {
        case true: {
          return {
            activeWorkout: {
              ...state.activeWorkout, //get that workout
              exercises: state.activeWorkout.exercises.filter(
                exercise => exercise.id !== action.payload.id
              )
            }
          };
        }
        default:
          return {
            ...state, // Get state
            workouts: state.workouts.map((
              workout // Map Each workout in workouts array if:
            ) =>
              // The exercises within the workout contiain an exercise which matches target ID
              workout.exercises.some(
                exercise => exercise.id === action.payload.id
              )
                ? {
                    // Then, Return each item in that workout which does NOT equal that ID
                    ...workout,
                    exercises: workout.exercises.filter(
                      exercise => exercise.id !== action.payload.id
                    )
                  }
                : // Otherwise, return an unmodifed workout object
                  workout
            )
          };
      }
    }
    case "ADD_SET": {
      //To DO Add empty workout
      const append = exercise => [...exercise.sets, 5];

      switch (action.payload.isActive) {
        case true: {
          return updateActiveExercise(append, "sets");
        }
        default: {
          return updateExercise(append, "sets");
        }
      }
    }
    case "DELETE_SET": {
      const index = action.payload.set - 1;
      const remove = exercise => [
        ...exercise.sets.slice(0, index),
        ...exercise.sets.slice(index + 1)
      ];
      switch (action.payload.isActive) {
        case true: {
          return updateActiveExercise(remove, "sets");
        }
        default:
          return updateExercise(remove, "sets");
      }
    }
    case "UPDATE_WEIGHT": {
      const index = action.payload.set - 1;
      const newWeight = parseInt(action.payload.weight);
      const update = exercise =>
        exercise.weight.map((set, i) => {
          console.log(i, index);
          return i == index ? newWeight : set;
        });
      return updateActiveExercise(update, "weight");
    }
    case "INCREMENT_REP": {
      const index = action.payload.set - 1;
      const increment = exercise => {
        let reps = exercise.sets.slice();
        reps[index] = parseInt(reps[index]) + 1;
        return [...reps];
      };

      switch (action.payload.isActive) {
        case true: {
          return updateActiveExercise(increment, "sets");
        }
        default: {
          return updateExercise(increment, "sets");
        }
      }
    }
    case "DECREMENT_REP": {
      const index = action.payload.set - 1;
      const decrement = exercise => {
        let reps = exercise.sets.slice();
        reps[index] = parseInt(reps[index]) - 1;
        return [...reps];
      };

      switch (action.payload.isActive) {
        case true: {
          return updateActiveExercise(decrement, "sets");
        }
        default: {
          return updateExercise(decrement, "sets");
        }
      }
    }

    case "LOAD_WORKOUT": {
      const newWorkout = { ...state.selectedWorkout };

      newWorkout.exercises.forEach(exercise => {
        exercise.weight = [];
        exercise.sets.forEach(set => {
          exercise.weight.push(0);
        });
      });
      return {
        ...state,
        activeWorkout: newWorkout,
        id: action.payload.id,
        selectedWorkout: { id: null }
      };
    }

    case "SAVE_WORKOUT": {
      return {
        ...state,
        history: [...state.history, state.activeWorkout],
        activeWorkout: { id: null },
        date: new Date(Date.now())
      };
    }

    case "VIEW_WORKOUT": {
      return {
        ...state,
        loggedWorkout: state.history.filter(
          workout => workout.id == action.payload.id
        )[0]
      };
    }

    default:
      return state;
  }
};
export default class Provider extends Component {
  state = {
    selectedWorkout: {
      id: null
    },
    loggedWorkout: {},
    activeWorkout: {},
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
            sets: [10, 5, 5],
            weight: [10, 10, 10]
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
            sets: [5, 5, 5],
            weight: [10, 10, 10]
          }
        ]
      }
    ],
    history: [
      {
        id: 1,
        // selected: false,
        name: "Pull Day",
        exercises: [
          {
            id: 3,
            name: "Deadlift",
            tags: ["Clean", "Slow"],
            sets: [10, 5, 5],
            weight: [10, 10, 10]
          }
        ],
        date: new Date(Date.now())
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
            sets: [5, 5, 5],
            weight: [10, 10, 10]
          }
        ],
        date: new Date(2019, 2, 1)
      },
      {
        id: 10,
        // selected: false,
        name: "Push Day",
        exercises: [
          {
            id: 45,
            name: "Squat",
            tags: ["Front", "2ndpin"],
            sets: [5, 5, 5],
            weight: [10, 10, 10]
          }
        ],
        date: new Date(2019, 3, 1)
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
