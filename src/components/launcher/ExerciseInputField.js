import React, { useState } from "react";
import styles from "./workoutForm.module.css";
import Autocomplete from "../autocomplete/Autocomplete";

export default function ExerciseInputField() {
  const [show, setShow] = useState(false);
  // ToDo on update show once an exercise is selected
  return (
    <div className={show ? styles.showRepsAndSets : styles.hideRepsAndSets}>
      <div>
        <Autocomplete
          suggestions={["Deadlift", "Squat", "Bicep Curls"]}
          setShow={setShow}
        />
      </div>
      {show ? (
        <React.Fragment>
          <div>
            <input type="number" placeholder="Sets" />
          </div>
          <div>
            <input type="number" placeholder="Reps" />
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
}
