import React from "react";
import uuid from "uuid";
import styles from "./exercise.module.css";

export default function ExerciseHeader(props) {
  const {
    id,
    name,
    dispatch,
    showExercise,
    tags,
    onChangeHandler,
    toggleExerciseHandler
  } = props;
  return (
    <div className={styles.header}>
      <div>
        <input
          style={{
            textAlign: showExercise ? "center" : "left"
          }}
          type="text"
          name={"name"}
          onChange={e => onChangeHandler(e)}
          value={name}
          className={`${styles.heading}`}
          onKeyPress={e => {
            // Blur on Enter
            if (e.key === "Enter") {
              dispatch({
                type: "UPDATE_EXERCISE_NAME",
                payload: { name, id }
              });
              e.target.blur();
            }
          }}
        />
      </div>
      {!showExercise ? (
        <div className={styles.tagContainer}>
          {tags.map(tag => (
            <div className={styles.tag} key={uuid()}>
              {tag}
            </div>
          ))}
        </div>
      ) : (
        <div />
      )}

      <div>
        <i
          className="fas fa-angle-down"
          onClick={() => toggleExerciseHandler(showExercise)}
        />
      </div>
      <i />
    </div>
  );
}
