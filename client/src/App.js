import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';
import Courses from './Courses';
import CourseDetail from './CourseDetail';



export default () => (
    <Router>
        <header>
          <div>
            <Switch>
              <Route exact path="/" component={Courses} />
              <Route path="/details" component={CourseDetail}/>
            </Switch>
          </div>
        </header>
    </Router>
);


