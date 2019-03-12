import React from "react";
import styles from "./exercise.module.css";
import uuid from "uuid";
import Set from "../sets/Set";

export default function ExerciseBody(props) {
  const { sets, id, dispatch, tags, isActive } = props;
  return (
    <div className={styles.body}>
      <div className={styles.bodyHeadings}>
        <div>Sets</div>
        <div>Reps</div>
        {isActive ? <div>Weight</div> : null}
        <div />
      </div>
      <div className={styles.bodyContent}>
        {sets.map((reps, set) => (
          <Set
            reps={reps}
            set={set + 1}
            key={uuid()}
            id={id}
            isActive={isActive}
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

      <div className={styles.tagContainer}>
        {tags.map(tag => (
          <div className={styles.tag} key={uuid()}>
            {tag}
          </div>
        ))}

        <div className={styles.createTagBtn}>
          <i className="fas fa-plus" />
          New Tag
          <button type="button" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
