import React from 'react';
import {
    Link, Router,
} from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return(
            <div className="header">
                <div className="bounds">
                    <h1 className="header--logo">Courses</h1>
                    <nav>
                            <React.Fragment>
                                <span>Welcome!</span>
                                <Link to="/signout">Sign Out</Link>
                            </React.Fragment>
                            <React.Fragment>
                                <Link className="signup" to="/signup">Sign Up</Link>
                                <Link className="signin" to="/signin">Sign In</Link>
                            </React.Fragment>
                    </nav>
                </div>
            </div>

        )
    }
}

export default Header;
