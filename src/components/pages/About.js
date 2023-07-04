import React from "react";

export default function About() {
    return (
        <section className="hero" id="about-me">
            <div className="hero-wrapper">
                <div className="column-left">
                    <h1>Hi I'm Jonson</h1>
                    <p>
                    I am a Full-Stack Web Development Graduate from the University of New Brunswick.
                    I bring passion and expertise in crafting robust, user-friendly digital experiences. 
                    I am proficient in Javascript, React, NodeJs, ExpressJS, MongoDB, and mySQL!  
                    </p>
                </div>

                <div className="column-right">
                    <img src={ require ('./images/5ca489578f388fd6152e4f8263149b47-sticker.png')} alt= "Jonson Avatar" className="avatar"/>
                </div>
            </div>
        </section>
    )
}