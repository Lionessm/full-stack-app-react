import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import config from "./config";
import Header from './Header';


class Courses extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    fetch(config.apiBaseUrl + '/courses')
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data);
          this.setState({ courses: data });
        })
  }
  render() {
        const { courses } = this.state;

        return (
       <div>
            <Header />
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        {course.title}
                    </li>
                ))}
            </ul>
        </div>
        )
    }
}


export default Courses;