import React, { Component } from "react";
import "./main.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Calendar from "./components/calendar/Calendar";
import WorkoutLauncher from "./components/launcher/WorkoutLauncher";
import WorkoutViewer from "./components/workouts/WorkoutViewer";
import Analytics from "./components/analytics/Analytics";
import WorkoutForm from "./components/launcher/WorkoutForm";
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
                <Consumer>
                  {value => {
                    const { loggedWorkout, activeWorkout, dispatch } = value;
                    return (
                      <React.Fragment>
                        <Route
                          path="/gymlog"
                          component={WorkoutLauncher}
                          exact
                        />

                        <Route path="/" component={WorkoutLauncher} exact />
                        <Route
                          path="/gymlog/active/:id"
                          render={() => (
                            <WorkoutViewer workout={activeWorkout} />
                          )}
                        />
                        <Route
                          path="/gymlog/history"
                          component={Calendar}
                          exact
                        />

                        <Route
                          path="/gymlog/history/:id"
                          render={() => (
                            <WorkoutViewer workout={loggedWorkout} />
                          )}
                        />

                        <Route
                          path="/gymlog/new"
                          render={() => <WorkoutForm dispatch={dispatch} />}
                          exact
                        />
                      </React.Fragment>
                    );
                  }}
                </Consumer>
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
