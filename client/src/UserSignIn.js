import React from "react";
import { Redirect } from 'react-router-dom'
import Header from "./Header";

class UserSignIn extends React.Component {
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

    render () {
        return (
            <div>
                <Header />
                <div>
                    <div className="bounds">
                        <div className="grid-33 centered signin">
                            <h1>Sign In</h1>
                            <div>
                                <form>
                                    <div><input id="emailAddress" name="emailAddress" type="text" className placeholder="Email Address" defaultValue /></div>
                                    <div><input id="password" name="password" type="password" className placeholder="Password" defaultValue /></div>
                                    <div className="grid-100 pad-bottom">
                                        <button className="button" type="submit">Sign In</button>
                                        {this.renderRedirect()}
                                        <button className="button button-secondary" onClick={this.setRedirect}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                            <p>&nbsp;</p>
                            <p>Don't have a user account? <a href="signup">Click here</a> to sign up!</p>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

export default UserSignIn;


