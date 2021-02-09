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
            <div className="bounds">
                {courses.map(course => (
                <div className="grid-33"><a className="course--module course--link" href={'/courses/' + course.id}>
                    <h4 className="course--label" key={course.id}></h4>
                    <h3 className="course--title">{course.title}</h3>
                </a></div>
                       ))}
            <div className="grid-33"><a className="course--module course--add--module" href="/courses/create">
                <h3 className="course--add--title"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 13 13" className="add">
                    <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 " />
                        </svg>New Course</h3>
                </a></div>
            </div>
       </div>
        )
    }
}


export default Courses;