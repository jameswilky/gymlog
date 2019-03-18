import React, { Component } from "react";
import "./main.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Calendar from "./components/calendar/Calendar";
import WorkoutLauncher from "./components/workouts/WorkoutLauncher";
import ActiveWorkout from "./components/workouts/ActiveWorkout";
import LoggedWorkout from "./components/workouts/LoggedWorkout";
import Provider, { Consumer } from "./Context";

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
                <Route path="/active/:id" component={ActiveWorkout} />
                <Route path="/history" component={Calendar} />
                <Route path="/log/:id" component={LoggedWorkout} />
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
