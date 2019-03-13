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
    name: "",
    isActive: false
  };

  componentDidMount() {
    /* On Load pass workout name into local state */
    console.log(this.props);
    const { name } = this.props.exercise;
    const { isActive } = this.props;
    this.setState({
      name,
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
    const { showExercise, name, isActive } = this.state;
    const { tags, sets, id, weight } = this.props.exercise;

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
                  <ExerciseBody
                    id={id}
                    dispatch={dispatch}
                    sets={sets}
                    tags={tags}
                    isActive={isActive}
                    weight={weight}
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
