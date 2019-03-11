import React, { Component } from "react";
import Set from "../sets/Set";
import { Consumer } from "../../Context";
import styles from "./exercise.module.css";
import uuid from "uuid";
import ExerciseHeader from "./ExerciseHeader";
import ExerciseFooter from "./ExerciseFooter";

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

  toggleExercise = showExercise => {
    this.setState({ showExercise: !showExercise });
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
              <ExerciseHeader
                // props={(id, name, dispatch, showExercise, tags)}
                id={id}
                name={name}
                dispatch={dispatch}
                showExercise={showExercise}
                tags={tags}
                onChangeHandler={this.onChange.bind(this)}
                toggleExerciseHandler={this.toggleExercise.bind(
                  this,
                  showExercise
                )}
              />

              {showExercise ? (
                <div>
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
                        <button type="button" onClick={() => {}} />
                      </div>
                    </div>
                  </div>
                  <ExerciseFooter id={id} dispatch={dispatch} />
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
