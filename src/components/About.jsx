import React from "react"
import angle from "../assets/angle_down.svg"
import JesperObject from "./JesperObject"

export const About = () => {
    return (
        <section className="section--about" style={{ position: "relative" }}>
            <div className="about--text"></div>
            <div className="jesper--div">
                <JesperObject />
            </div>
        </section>
    )
}

// TODO image bigger no padding on about section