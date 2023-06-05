import React from "react";

export default function About() {
    return (
        <section className="hero" id="about-me">
            <div className="hero-wrapper">
                <div className="column-left">
                    <h1>Hi I'm Jonson</h1>
                    <p>
                    I am a Full-Stack Web Development student at UNB.<br/>
                    I have a passion for problem solving and design. <br/>
                    </p>
                    <button type="button" href="#">Contact Me</button>
                </div>

                <div className="column-right">
                    <img src="./assets/images/5ca489578f388fd6152e4f8263149b47-sticker.png" alt="Jonson Avatar" className="avatar"/>
                </div>
            </div>
        </section>
    )
}