import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import React from 'react';
import Courses from './Courses';


export default () => (
    <Router>
        <header>
          <div>
            <Switch>
              <Route exact path="/" component={Courses} />
            </Switch>
          </div>
        </header>
    </Router>
);

