import React from 'react';
import config from './config.js';
import Header from "./Header";
import "./global.css";


class CourseDetail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            courses: {
                title: [],
                description: [],
                estimatedTime: [],
                materialsNeeded: [],
                user: {
                },
                userId: []
            },
        };
    }
    componentDidMount() {
        console.log("this.props.match.params.id ", this.props.match.params.id)
        fetch(config.apiBaseUrl + `/courses/${this.props.match.params.id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log("data", data);
                this.setState({ courses: data });
            })
    }


    // creeaza un loop pentru materials needed sa fie ul

    render () {
        const { courses } = this.state;
        const materials = courses.materialsNeeded;

        return (
            <div>
            <title>Courses</title>
            <Header />
                    <div className="actions--bar">
                        <div className="bounds">
                            <div className="grid-100"><span><a className="button" href="">Update Course</a><a className="button" href="#">Delete Course</a></span><a className="button button-secondary" href="index.html">Return to List</a></div>
                        </div>
                    </div>
                    <div className="bounds course--detail">
                        <div className="grid-66">
                            <div className="course--header">
                                <h4 className="course--label">Course</h4>
                                <h3 className="course--title">{courses.title}</h3>
                                <p> By {courses.user.firstName} {courses.user.lastName}</p>
                            </div>
                            <div className="course--description">
                                <p> {courses.description} </p>
                            </div>
                        </div>
                        <div className="grid-25 grid-right">
                            <div className="course--stats">
                                <ul className="course--stats--list">
                                    <li className="course--stats--list--item">
                                        <h4>Estimated Time</h4>
                                        <h3>{courses.estimatedTime}</h3>
                                    </li>
                                    <li className="course--stats--list--item">
                                        <h4>Materials Needed</h4>
                                            <ul>
                                                <li>{materials}</li>
                                            </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default CourseDetail;