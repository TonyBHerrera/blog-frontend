import React, { Component } from "react"
import axios from "axios"

import Home from "../pages/home"


export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            errorColor: 'white'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFail = this.handleChange.bind(this)

    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorColor: 'white'
        })
    }

    handleFail() {
        this.setState({
            errorColor: 'red'
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        axios
            .get("https://tbh-blog-server.herokuapp.com/admins",
            ).then(response => {
                console.log("response data", response.data)
                let signInArray = response.data
                signInArray.forEach(item => {
                    if (this.state.email === item.username) {
                        if (this.state.password === item.password) {
                            this.props.handleSuccessfulAuth()
                        } else {
                            console.log('failed')
                        }
                    }
                })

            }).catch(error => {
                console.log("something went wrong", error)
            })
    }


    render() {
        return (
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD </h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div>
                        <button type="submit"> Login </button>

                    </div>
                </form>
            </div>
        )
    }

}