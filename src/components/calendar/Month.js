import React from "react";
import styles from "./month.module.css";
const Month = props => {
  const { today, month, year, nDays } = props.date;
  const { isCurrentMonth, workouts } = props;
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
  console.log(workoutDays);

  // Read this https://reactjs.org/docs/jsx-in-depth.html#jsx-children
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
              className={`${styles.date} ${
                date == today && isCurrentMonth ? styles.today : null
              }`} // If Its todays date and we are on the current month then highlight the date in green
              key={date}
              onClick={
                workoutDays.includes(date)
                  ? () => console.log("contains workout", date)
                  : () => console.log("Does not contain workout", date)
              }
            >
              {date}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Month;
