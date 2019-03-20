import React from "react";
import Exercise from "../exercises/Exercise";
import styles from "./workout.module.css";

export default function Workout(props) {
  const { exercises, isActive, id, dispatch } = props;
  return (
    <React.Fragment>
      <div>
        {exercises.map(exercise => (
          <Exercise key={exercise.id} exercise={exercise} isActive={isActive} />
        ))}
      </div>

      <div>
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
