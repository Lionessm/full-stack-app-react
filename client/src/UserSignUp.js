import React from "react";
import { Redirect } from 'react-router-dom'
import Header from "./Header";

class UserSignUp extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
            <Header/>
                <div className="bounds">
                    <div className="grid-33 centered signin">
                        <h1>Sign Up</h1>
                        <div>
                            <form>
                                <div><input id="firstName" name="firstName" type="text" className placeholder="First Name"
                                            defaultValue/></div>
                                <div><input id="lastName" name="lastName" type="text" className placeholder="Last Name"
                                            defaultValue/></div>
                                <div><input id="emailAddress" name="emailAddress" type="text" className
                                            placeholder="Email Address" defaultValue/></div>
                                <div><input id="password" name="password" type="password" className placeholder="Password"
                                            defaultValue/></div>
                                <div><input id="confirmPassword" name="confirmPassword" type="password" className
                                            placeholder="Confirm Password" defaultValue/></div>
                                <div className="grid-100 pad-bottom">
                                    <button className="button" type="submit">Sign Up</button>
                                    <button className="button button-secondary"
                                            onClick="event.preventDefault(); location.href='index.html';">Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                        <p>&nbsp;</p>
                        <p>Already have a user account? <a href="sign-in.html">Click here</a> to sign in!</p>
                    </div>
                </div>
            </div>

        )}
}

export default UserSignUp;