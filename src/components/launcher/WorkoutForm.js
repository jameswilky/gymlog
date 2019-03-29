import React, { useState } from "react";
import styles from "./workoutForm.module.css";
import ExerciseInputField from "./ExerciseInputField";
import { useInput } from "../../hooks/inputHook";
import { Link } from "react-router-dom";

export default function WorkoutForm(props) {
  const { dispatch } = props;
  const { value: workoutName, bind: bindWorkoutName } = useInput("");
  const [exercises, setExercises] = useState([
    { name: "", sets: "", reps: "" }
  ]);
  const formValid =
    exercises[0].sets && exercises[0].name && exercises[0].reps && workoutName;

  const handleSubmit = e => {
    e.preventDefault();
    let items = [...exercises];
    items = items.map(item => {
      return item.name === "" || item.sets === "" || item.reps === ""
        ? null
        : item;
    });
    const filtered = items.filter(Boolean);
    console.log(filtered);
    dispatch({
      type: "ADD_WORKOUT",
      payload: { workoutName, exercises: filtered }
    });
  };
  const handleChange = (e, index, target) => {
    let items = [...exercises];

    const item = { ...items[index] };
    item[target] = e.target.value;
    items[index] = item;
    setExercises(items);
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
                    {...bindWorkoutName}
                    name="name"
                  />
                </h2>
              </div>
              {exercises.map((exercise, index) => {
                return (
                  <ExerciseInputField
                    key={index}
                    exercise={exercise}
                    index={index}
                    changeHandler={handleChange}
                  />
                );
              })}
            </div>
          </form>
          <button
            onClick={() =>
              setExercises([...exercises, { name: "", sets: "", reps: "" }])
            }
          >
            <i className="fas fa-plus"> </i>
          </button>
        </div>
        {formValid ? (
          <div className="main__button green" onClick={e => handleSubmit(e)}>
            <Link to="/" className={styles.link}>
              <i className={`fas fa-paper-plane ${styles.icon}`} />{" "}
            </Link>
          </div>
        ) : (
          <div className={`main__button ${styles.notClickable}`}>
            <i className={`fas fa-paper-plane ${styles.icon}`} />{" "}
          </div>
        )}
      </div>
    </div>
  );
}
