import React, { Component } from "react";
import "./main.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Calendar from "./components/calendar/Calendar";
import WorkoutLauncher from "./components/launcher/WorkoutLauncher";
import WorkoutViewer from "./components/workouts/WorkoutViewer";
import WorkoutForm from "./components/launcher/WorkoutForm";
import Provider, { Consumer } from "./Context";

import { HashRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <HashRouter>
            <React.Fragment>
              <Header />
              <Switch>
                <Consumer>
                  {value => {
                    const { loggedWorkout, activeWorkout, dispatch } = value;
                    return (
                      <React.Fragment>
                        <Route path="/" component={WorkoutLauncher} exact />
                        <Route
                          path="/active/:id"
                          render={() => (
                            <WorkoutViewer workout={activeWorkout} />
                          )}
                        />
                        <Route path="/history" component={Calendar} exact />

                        <Route
                          path="/history/:id"
                          render={() => (
                            <WorkoutViewer workout={loggedWorkout} />
                          )}
                        />

                        <Route
                          path="/new"
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
          </HashRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
