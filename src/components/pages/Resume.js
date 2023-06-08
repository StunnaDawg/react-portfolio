import React from "react";

export default function Resume() {
 return (
    <section className="hero" id="about-me">
            <div className="hero-wrapper">
                <div className="column-left">
                    <h1 ><a className="resumeButton"href="https://docs.google.com/document/d/1uSlaK6wRvMOeCHAQ-eRxklVp1jCxTG0yqkgmyKLzATA/edit?usp=sharing">Click me to Download my Resume!</a></h1>
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