import React from "react";
import styles from "./month.module.css";
const Month = props => {
  const { today, month, year, nDays } = props.date;
  const { isCurrentMonth } = props;
  //todo pass day that month starts
  let dates = [];
  const generateDates = () => {
    for (let i = 1; i < nDays + 1; i++) {
      dates.push(i);
    }
    return dates;
  };
  dates = generateDates();

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
          return date == today && isCurrentMonth ? (
            <div className={[styles.date, styles.today].join(" ")} key={date}>
              {date}
            </div>
          ) : (
            <div className={styles.date} key={date}>
              {date}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Month;
