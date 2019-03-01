import React, { Component } from "react";
import "./main.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import WorkoutLauncher from "./components/workouts/WorkoutLauncher";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <WorkoutLauncher />
        <Footer />
      </div>
    );
  }
}

export default App;
