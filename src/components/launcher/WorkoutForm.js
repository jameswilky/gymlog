import React, { useState } from "react";
import styles from "./workoutForm.module.css";
import ExerciseInputField from "./ExerciseInputField";

export default function WorkoutForm() {
  const [workoutName, setWorkoutName] = useState("");
  const [newExerciseName, setNewExerciseName] = useState("");
  const exercise = {
    id: 3,
    name: "Deadlift",
    tags: ["Clean", "Slow"],
    sets: [10, 5, 5],
    weight: [10, 10, 10]
  };
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
              <ExerciseInputField />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
