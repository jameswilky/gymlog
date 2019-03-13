import React from "react";
import styles from "./exercise.module.css";

export default function ExerciseFooter(props) {
  const { dispatch, id, isActive } = props;
  return (
    <div className={styles.footer}>
      <button
        onClick={() =>
          dispatch({ type: "DELETE_EXERCISE", payload: { id, isActive } })
        }
      >
        <i className="fas fa-trash" />
        Delete
      </button>
    </div>
  );
}
