import React from "react";
import styles from "./exercise.module.css";
import uuid from "uuid";
import Set from "../sets/Set";

export default function ExerciseBody(props) {
  const { sets, id, dispatch, isActive, weight, showContent } = props;
  return (
    <div className={styles.body}>
      {showContent ? (
        <div className={styles.bodyHeadings}>
          <div>Sets</div>
          <div>Reps</div>
          {isActive ? <div>Weight</div> : null}
          <div />
        </div>
      ) : (
        <React.Fragment />
      )}

      <div className={styles.bodyContent}>
        {sets.map((reps, set) => (
          <Set
            reps={reps}
            set={set + 1}
            key={uuid()}
            id={id}
            isActive={isActive}
            dispatch={dispatch}
            weight={weight[set]}
          />
        ))}
      </div>
      <div className={styles.bodyFooter}>
        <button className={styles.add}>
          <i
            className="fas fa-plus"
            onClick={() =>
              dispatch({ type: "ADD_SET", payload: { id, isActive } })
            }
          >
            {" "}
          </i>
        </button>
      </div>

      {showContent ? (
        <div className={styles.tagContainer} />
      ) : (
        <React.Fragment />
      )}
    </div>
  );
}
