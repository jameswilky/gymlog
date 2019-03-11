import React from "react";
import styles from "./exercise.module.css";

export default function ExerciseFooter(props) {
  const { dispatch, id } = props;
  return (
    <div className={styles.footer}>
      <button
        onClick={() => dispatch({ type: "DELETE_EXERCISE", payload: { id } })}
      >
        <i className="fas fa-trash" />
        Delete
      </button>
    </div>
  );
}
