import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Avatar from './avatar-characters/avatar';
import Details from './avatar-characters/details';

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <Router>
            <Switch>

              <Route
                path="/"
                exact
                render={(routerProps) => <Avatar {...routerProps} />}
              />

              <Route
                path="/:_id"
                exact
                render={(routerProps) => <Details {...routerProps} />}
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}
