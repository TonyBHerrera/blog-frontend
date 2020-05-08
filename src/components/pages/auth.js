import React, { Component } from "react";

import Login from "../../components/auth/login"
import Skull from "../../../static/assets/images/skull-and-crossbones.jpg"
export default class Auth extends Component {
    constructor() {
        super()
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
                    <Login />
                </div>

            </div>
        )
    }
}