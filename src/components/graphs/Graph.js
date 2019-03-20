import React from "react";
import { Line } from "react-chartjs-2";
import styles from "./graph.module.css";

export default function Graph() {
  const history = [
    {
      id: 1,
      // selected: false,
      name: "Pull Day",
      exercises: [
        {
          id: 3,
          name: "Deadlift",
          tags: ["Clean", "Slow"],
          sets: [10, 5, 5],
          weight: [10, 10, 10]
        }
      ],
      date: 1
    },
    {
      id: 2,
      // selected: false,
      name: "Leg Day",
      exercises: [
        {
          id: 4,
          name: "Squat",
          tags: ["Front", "2ndpin"],
          sets: [5, 5, 5],
          weight: [10, 10, 10]
        }
      ],
      date: 3
    },
    {
      id: 10,
      // selected: false,
      name: "Push Day",
      exercises: [
        {
          id: 45,
          name: "Squat",
          tags: ["Front", "2ndpin"],
          sets: [5, 5, 5],
          weight: [10, 10, 10]
        }
      ],
      date: 7
    }
  ];
  const chartData = {
    labels: ["test", "test", "test", "test", "test"],
    datasets: [{ label: "Weight", data: [100, 125, 150, 75, 100] }]
  };

  return (
    <div className={styles.container}>
      <Line
        className={styles.chart}
        data={chartData}
        height={500}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );
}
