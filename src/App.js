import React, { Component } from "react";
import "./main.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import WorkoutLauncher from "./components/workouts/WorkoutLauncher";
import Provider from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <WorkoutLauncher />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
