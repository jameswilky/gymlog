import React, { useState } from "react";
import styles from "./workoutForm.module.css";
import ExerciseInputField from "./ExerciseInputField";
import { useInput } from "../../hooks/inputHook";

export default function WorkoutForm() {
  const { value: workoutName, bind: bindWorkoutName } = useInput("");
  const [exercises, setExercises] = useState([{}]);

  const handleSubmit = e => {
    console.log(workoutName);

    e.preventDefault();
  };
  return (
    <div className="content">
      <div className="contentHeading">
        <h2>Create New Workout</h2>
      </div>
      <div className="contentBody">
        <div className="card">
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.container}>
              <div>
                <h2>
                  <input
                    type="text"
                    placeholder="Enter Workout Name"
                    {...bindWorkoutName}
                    name="name"
                  />
                </h2>
              </div>
              {exercises.map((exercise, index) => {
                return <ExerciseInputField key={index} exercise={exercise} />;
              })}
              <button onClick={() => setExercises([...exercises, {}])}>
                <i className="fas fa-plus"> </i>
              </button>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
