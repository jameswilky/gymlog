import React from "react";
import Exercise from "../exercises/Exercise";

export default function TestWorkout(props) {
  const { exercises, isActive, id, dispatch } = props;
  console.log(props);
  return (
    <React.Fragment>
      <div className="card__body">
        {exercises.map(exercise => (
          <Exercise key={exercise.id} exercise={exercise} isActive={isActive} />
        ))}
      </div>

      <div className="card__footer">
        <button
          className="card__add"
          onClick={() =>
            dispatch({ type: "ADD_EXERCISE", payload: { id, isActive } })
          }
        >
          <i className="fas fa-plus"> </i>
          Add
        </button>
      </div>
    </React.Fragment>
  );
}
