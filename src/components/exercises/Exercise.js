import React, { Component } from "react";
import Set from "../sets/Set";
import { Consumer } from "../../Context";
import styles from "./exercise.module.css";
import uuid from "uuid";
import ExerciseHeader from "./ExerciseHeader";
import ExerciseBody from "./ExerciseBody";
import ExerciseBodyActive from "./ExerciseBodyActive";

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
                  {/* @todo  
                  create switch between active and non active
                  */}
                  <ExerciseBodyActive
                    id={id}
                    dispatch={dispatch}
                    sets={sets}
                    tags={tags}
                  />
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
