import React from 'react';


class CourseDetail extends React.Component {

    constructor(props){
        super(props);
        };

    // creeaza un loop pentru materials needed sa fie ul

    render () {
        return (
            <div>
            <title>Courses</title>
            <div id="root">
                <div>
                    <div className="header">
                        <div className="bounds">
                            <h1 className="header--logo">Courses</h1>
                            <nav><span>Welcome {this.name}</span><a className="signout" href="index.js">Sign Out</a></nav>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default CourseDetail;