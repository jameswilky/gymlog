import React, { useState } from "react";
import styles from "./workoutForm.module.css";
import Autocomplete from "../autocomplete/Autocomplete";

export default function ExerciseInputField(props) {
  const { exercise, index, changeHandler } = props;

  return (
    <div className={styles.exerciseForm}>
      <div>
        <Autocomplete
          suggestions={[
            "Deadlift",
            "Squat",
            "Bicep Curls",
            "Shoulder Press",
            "Overhead Press",
            "Bench Press",
            "Pull Ups",
            ""
          ]}
          changeHandler={changeHandler}
          exerciseIndex={index}
        />
      </div>
      <React.Fragment>
        <div>
          <input
            type="number"
            placeholder="Sets"
            value={exercise.sets}
            onChange={e => changeHandler(e, index, "sets")}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Reps"
            value={exercise.reps}
            onChange={e => changeHandler(e, index, "reps")}
          />
        </div>
      </React.Fragment>
    </div>
  );
}
