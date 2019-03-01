import React, { Component } from "react";
import "./main.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import WorkoutLauncher from "./components/workouts/WorkoutLauncher";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <WorkoutLauncher />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
