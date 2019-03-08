import React, { Component } from "react";
import "./main.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import WorkoutLauncher from "./components/workouts/WorkoutLauncher";
import ActiveWorkout from "./components/workouts/ActiveWorkout";
import { LoaderProvider } from "./LoaderContext";
import { ActiveProvider } from "./ActiveContext";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <LoaderProvider>
        <ActiveProvider>
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
        </ActiveProvider>
      </LoaderProvider>
    );
  }
}

export default App;
