import React, { Component } from "react";
import Set from "../sets/Set";
import { Consumer } from "../../Context";
import styles from "./exercise.module.css";
import uuid from "uuid";
import ExerciseHeader from "./ExerciseHeader";
import ExerciseBody from "./ExerciseBody";

import ExerciseFooter from "./ExerciseFooter";

class Exercise extends Component {
  state = {
    showExercise: false,
    isActive: false
  };

  componentDidMount() {
    /* On Load pass workout name into local state */
    const { isActive } = this.props;
    this.setState({
      isActive
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleExercise = showExercise => {
    this.setState({ showExercise: !showExercise });
  };

  render() {
    const { showExercise, isActive } = this.state;
    const { sets, id, weight, name } = this.props.exercise;
    const { exercise } = this.props;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className={styles.container}>
              <ExerciseHeader
                id={id}
                name={name}
                dispatch={dispatch}
                showExercise={showExercise}
                onChangeHandler={this.onChange.bind(this)}
                toggleExerciseHandler={this.toggleExercise.bind(
                  this,
                  showExercise
                )}
                isActive={isActive}
              />

              {showExercise ? (
                <div>
                  {/* @todo  
                  create switch between active and non active
                  */}
                  <ExerciseBody
                    id={id}
                    dispatch={dispatch}
                    sets={sets}
                    isActive={isActive}
                    weight={weight}
                    showContent={sets.length > 0}
                  />
                  <ExerciseFooter
                    id={id}
                    dispatch={dispatch}
                    isActive={isActive}
                  />
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
