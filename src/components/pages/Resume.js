import React from "react";
import ResumeDownlaod from "./images/JonsonAllenRescopy.pdf"

export default function Resume() {
 return (
    <section className="hero" id="about-me">
            <div className="hero-wrapper">
                <div className="column-left">
                    <h1 ><a className="resumeButton" href={ResumeDownlaod} target = "_blank" download="JonsonAllenResume">Click me to Download my Resume!</a></h1>
                </div>
                <div className="column-right">
                    <h2 className="profHeader">Proficiencies </h2>
                    <ul className="resumeProf">
                        <li>
                            Vanilla Javascript
                        </li>
                        <li>
                            Node JS
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            MongoDB
                        </li>
                        <li>
                            mySQL
                        </li>
                        <li>
                            Express.JS
                        </li>
                    </ul>
                    
                </div>
            </div>
        </section>
 )
}