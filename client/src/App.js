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
import createCourse from "./create-course";
import updateCourse from "./update-course";



export default () => (
    <Router>
        <header>
          <div>
            <Switch>
              <Route exact path="/" component={Courses} />
              <Route path='/signin' component={UserSignIn}/>
              <Route path='/signup' component={UserSignUp}/>
              <Route path='/courses/create' component={createCourse}/>
              <Route path='/courses/:id/update' component={updateCourse}/>
              <Route path='/courses/:id' component={CourseDetail}/>
            </Switch>
          </div>
        </header>
    </Router>
);


