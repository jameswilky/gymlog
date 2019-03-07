import React, { Component } from "react";
import "./main.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import WorkoutLauncher from "./components/workouts/WorkoutLauncher";
import ActiveWorkout from "./components/workouts/ActiveWorkout";
import Provider from "./context";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <BrowserRouter>
            <React.Fragment>
              <Header />
              <Switch>
                <Route path="/" component={WorkoutLauncher} exact />
                <Route path="/active" component={ActiveWorkout} />
              </Switch>
              <Footer />
            </React.Fragment>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
