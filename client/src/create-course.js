import React from 'react';
import Header from './Header';
import {Redirect} from "react-router-dom";

class createCourse extends React.Component {
    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="bounds course--detail">
                    <h1>Create Course</h1>
                    <div>
                        <div>
                            <h2 className="validation--errors--label">Validation errors</h2>
                            <div className="validation-errors">
                                <ul>
                                    <li>Please provide a value for "Title"</li>
                                    <li>Please provide a value for "Description"</li>
                                </ul>
                            </div>
                        </div>
                        <form>
                            <div className="grid-66">
                                <div className="course--header">
                                    <h4 className="course--label">Course</h4>
                                    <div><input id="title" name="title" type="text"
                                                className="input-title course--title--input"
                                                placeholder="Course title..." defaultValue/></div>
                                    <p>By Joe Smith</p>
                                </div>
                                <div className="course--description">
                                    <div><textarea id="description" name="description" className
                                                   placeholder="Course description..." defaultValue={""}/></div>
                                </div>
                            </div>
                            <div className="grid-25 grid-right">
                                <div className="course--stats">
                                    <ul className="course--stats--list">
                                        <li className="course--stats--list--item">
                                            <h4>Estimated Time</h4>
                                            <div><input id="estimatedTime" name="estimatedTime" type="text"
                                                        className="course--time--input" placeholder="Hours"
                                                        defaultValue/></div>
                                        </li>
                                        <li className="course--stats--list--item">
                                            <h4>Materials Needed</h4>
                                            <div><textarea id="materialsNeeded" name="materialsNeeded" className
                                                           placeholder="List materials..." defaultValue={""}/></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid-100 pad-bottom">
                                <button className="button" type="submit">Create Course</button>
                                {this.renderRedirect()}
                                <button className="button button-secondary"
                                        onClick={this.setRedirect}>Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default createCourse;


