import React from "react"
import Smiley from "../../../static/assets/images/smiley.jpg"

export default function About() {
    return (
        <div className="content-page-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + Smiley + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                }}
            />

            <div className="right-column">
                Hi, My Name is Tony Herrera this blog was created mostly so I could graduate
                from a coding bootcamp but it also serves as a place I can post really dope
                stuff that Intrest me and my intrest go from weightlifting to coding and
                all sorts of other things.
            </div>
        </div>

    )
}



