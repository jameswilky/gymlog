import React from "react";
import styles from "./exercise.module.css";
import uuid from "uuid";
import Set from "../sets/Set";

export default function ExerciseBody(props) {
  const { sets, id, dispatch, tags } = props;
  return (
    <div className={styles.body}>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Set</th>
            <th />
            <th>Reps</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {sets.map((reps, set) => (
            <Set reps={reps} set={set + 1} key={uuid()} id={id} />
          ))}
        </tbody>
      </table>
      <button className={styles.add}>
        <i
          className="fas fa-plus"
          onClick={() => dispatch({ type: "ADD_SET", payload: { id } })}
        >
          {" "}
        </i>
      </button>

      <hr />
      <div className={styles.tagContainer}>
        {tags.map(tag => (
          <div className={styles.tag} key={uuid()}>
            {/* <input
                          type="text"
                          name={"tag"}
                          onChange={this.onChange}
                          value={tag}
                          // onKeyPress={e => {
                          //   // Blur on Enter
                          //   if (e.key === "Enter") {
                          //     e.target.blur();
                          //   }
                          // }}
                        /> */}
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
