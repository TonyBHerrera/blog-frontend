import React from "react"
import { NavLink } from "react-router-dom"
import Smiley from "../../../static/assets/images/smiley.jpg"

export default function Navigation() {

    return (
        <div className="nav-wrapper">
            <div className="right-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/about">
                        About
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/blog">
                        Blog
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/new-blog">
                        New Blog
                    </NavLink>
                </div>
            </div>
            <div className="left-side">
                <img src={Smiley} />
            </div>
        </div>
    )
}