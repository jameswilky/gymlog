import React, { useState } from "react";
import styles from "./workoutForm.module.css";
import Autocomplete from "../autocomplete/Autocomplete";
import Autocomplete2 from "../autocomplete/Autocomplete2";

export default function WorkoutForm() {
  const [workoutName, setWorkoutName] = useState("");
  const [newExerciseName, setNewExerciseName] = useState("");

  return (
    <div className="content">
      <div className="contentHeading">
        <h2>Create New Workout</h2>
      </div>
      <div className="contentBody">
        <div className="card">
          <form className={styles.form}>
            <div className={styles.container}>
              <div>
                <h2>
                  <input
                    type="text"
                    placeholder="Enter Workout Name"
                    value={workoutName}
                    onChange={e => setWorkoutName(e.target.value)}
                    name="name"
                  />
                </h2>
              </div>
              <div>
                {/* Map Exercises to here */}
                <Autocomplete suggestions={["test1", "test2", "apple"]} />
              </div>
              <div>
                {" "}
                {/* On Blur, add exercise  */}
                <input
                  type="text"
                  placeholder="Add Exercise"
                  value={newExerciseName}
                  onChange={e => {
                    // open autocomplete and sugegst exercise
                    setNewExerciseName(e.target.value);
                  }}
                  onBlur={e => {
                    // Submit Exercise to state
                    setNewExerciseName("");
                  }}
                  name="exercise"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
