import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import UserSignIn from "./UserSignIn";
import UserSignUp from "./UserSignUp";



export default () => (
    <Router>
        <header>
          <div>
            <Switch>
              <Route exact path="/" component={Courses} />
              <Route path='/courses/details/:id' component={CourseDetail}/>
              <Route path='/signin' component={UserSignIn}/>
              <Route path='/signup' component={UserSignUp}/>
            </Switch>
          </div>
        </header>
    </Router>
);


