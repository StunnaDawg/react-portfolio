import React from "react";

export default function About() {
    return (
        <section className="hero" id="about-me">
            <div className="hero-wrapper">
                <div className="column-left">
                    <h1>Hi I'm Jonson</h1>
                    <p>
                    I am a Full-Stack Web Development Graduate from the University of New Brunswick.
                    I bring passion in crafting user-friendly digital experiences. 
                    I am proficient in Javascript, React, NodeJs, ExpressJS, MongoDB, and mySQL!  
                    </p>
                </div>

                <div className="column-right">
                    <img src={ require ('./images/5ca489578f388fd6152e4f8263149b47-sticker.png')} alt= "Jonson Avatar" className="avatar"/>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: "center", alignContent: "center"}}>
                <button style={{backgroundColor: "blueviolet"}}>
                    <a href="mailto:jonsonal@hotmail.com">
                    Contact Me!
                    </a> 
                </button>
            </div>
        </section>
    )
}