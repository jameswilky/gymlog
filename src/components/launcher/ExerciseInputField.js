import React, { useState } from "react";
import styles from "./workoutForm.module.css";
import Autocomplete from "../autocomplete/Autocomplete";
import { useInput } from "../../hooks/inputHook";

export default function ExerciseInputField(props) {
  const { exercise, key } = props;
  const { value: sets, bind: bindSets } = useInput("");
  const { value: reps, bind: bindReps } = useInput("");

  // ToDo on update show once an exercise is selected
  return (
    <div className={styles.exerciseForm}>
      <div>
        <Autocomplete suggestions={["Deadlift", "Squat", "Bicep Curls"]} />
      </div>
      <React.Fragment>
        <div>
          <input type="number" placeholder="Sets" {...bindSets} />
        </div>
        <div>
          <input type="number" placeholder="Reps" {...bindReps} />
        </div>
      </React.Fragment>
    </div>
  );
}
