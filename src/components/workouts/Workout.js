import React from "react";
import Exercise from "../exercises/Exercise";
import styles from "./workout.module.css";

export default function Workout(props) {
  const { exercises, isActive, id, dispatch, name } = props;
  return (
    <React.Fragment>
      {exercises.map(exercise => (
        <Exercise key={exercise.id} exercise={exercise} isActive={isActive} />
      ))}
      <div className="card">
        <button
          onClick={() =>
            dispatch({ type: "ADD_EXERCISE", payload: { id, isActive } })
          }
        >
          <i className="fas fa-plus"> </i>
          Add Exercise
        </button>
      </div>
    </React.Fragment>
  );
}
