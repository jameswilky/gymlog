import React from "react";
import styles from "./month.module.css";
import { Link } from "react-router-dom";
const Month = props => {
  const { today, month, year, nDays } = props.date;
  const { isCurrentMonth, workouts, dispatch } = props;
  //todo pass day that month starts

  let dates = [];
  const generateDates = () => {
    for (let i = 1; i < nDays + 1; i++) {
      dates.push(i);
    }
    return dates;
  };
  dates = generateDates();
  const workoutDays = workouts.map(workout => {
    return workout.date.getDate();
  });

  const ConditionalLink = props => {
    const { children, to, condition } = props;
    return condition ? <Link to={to}>{children}</Link> : children;
  };

  const getWorkoutByDate = date => {
    return workouts.filter(
      workout => date == new Date(workout.date).getDate()
    )[0];
  };
  console.log(workouts);
  getWorkoutByDate(1);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>Th</div>
        <div>F</div>
        <div>Sa</div>
        <div>Su</div>
      </div>
      <div className={styles.body}>
        {dates.map(date => {
          return (
            <div
              className={`${styles.dateCell} 
              ${date == today && isCurrentMonth ? styles.today : null}
              ${
                workoutDays.includes(date) && date != today
                  ? styles.workoutDay
                  : null
              }
              `}
              key={date}
              onClick={
                workoutDays.includes(date)
                  ? () =>
                      dispatch({
                        type: "VIEW_WORKOUT",
                        payload: { id: getWorkoutByDate(date).id }
                      })
                  : null
              }
            >
              <ConditionalLink
                condition={workoutDays.includes(date)}
                to={{
                  pathname: `/log/${
                    workoutDays.includes(date)
                      ? getWorkoutByDate(date).id
                      : null
                  }`
                }}
              >
                <div className={styles.inner}>{date}</div>
              </ConditionalLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Month;
