import React, { Component } from "react";
import Set from "./sets/Set";

import { Consumer } from "../../context";
import styles from "./exercise.module.css";
import uuid from "uuid";

class Exercise extends Component {
  state = {
    showExercise: false,
    name: ""
  };

  componentDidMount() {
    /* On Load pass workout name into local state */
    console.log(this.props);
    const { name } = this.props.exercise;
    this.setState({
      name
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { showExercise, name } = this.state;
    const { tags, sets, id } = this.props.exercise;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className={styles.container}>
              <div className={styles.header}>
                <div>
                  <input
                    style={{
                      textAlign: showExercise ? "center" : "left"
                    }}
                    type="text"
                    name={"name"}
                    onChange={this.onChange}
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
                    onClick={() =>
                      this.setState({ showExercise: !showExercise })
                    }
                  />
                </div>
                <i />
              </div>
              {showExercise ? (
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
                        /* Takes in an array, each value represents the number of reps,
                 'set' represents the set order
              */

                        <Set reps={reps} set={set + 1} key={uuid()} id={id} />
                      ))}
                    </tbody>
                  </table>
                  <button className={styles.add}>
                    <i
                      className="fas fa-plus"
                      onClick={() =>
                        dispatch({ type: "ADD_SET", payload: { id } })
                      }
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
                    </div>
                  </div>
                  <div className={styles.footer}>
                    <button
                      onClick={() =>
                        dispatch({ type: "DELETE_EXERCISE", payload: { id } })
                      }
                    >
                      <i className="fas fa-trash" />
                      Delete
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Exercise;
