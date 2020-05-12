import React, { Component } from "react";

import Login from "../../components/auth/login"
import Skull from "../../../static/assets/images/skull-and-crossbones.jpg"
export default class Auth extends Component {
    constructor(props) {
        super(props)

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
        this.handleUnSuccessfulAuth = this.handleUnSuccessfulAuth.bind(this)
    }

    handleSuccessfulAuth() {
        console.log("HandleSuccessfulAuth")
        this.props.handleSuccessfulLogin()
        this.props.history.push("/")
    }

    handleUnSuccessfulAuth() {
        this.props.handleUnSuccessfulLogin()
    }

    render() {
        return (
            <div className="auth-page-wrapper">
                <div
                    className="left-column"
                    style={{
                        backgroundImage: `url(${Skull})`
                    }}
                />


                <div className="right-column">
                    <Login
                        handleSuccessfulAuth={this.handleSuccessfulAuth}
                        handleUnSuccessfulAuth={this.handleUnSuccessfulAuth}

                    />
                </div>

            </div>
        )
    }
}