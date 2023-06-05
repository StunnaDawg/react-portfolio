import React from "react";

export default function Portfolio() {
    return (
        <section className="projects" id="projects">
            <div className="project-container">
                <h2>Projects</h2>
                <div className="projects-main">
                    <div className="projects-right">
                        <a href="https://github.com/roseandlily33/englishFootballTracker32">
                            <div className="flex-item" id="big-item">
                                <h4>Statistics Tracker</h4>
                                <p>Live</p>
                            </div>
                        </a> 
                    </div>
                    <div className="projects-left">
                        <a href="https://github.com/Valerigionetnoel/Budget-tracker">
                            <div className="flex-item"> 
                                <h4>Budget tracker</h4>
                                <p>Live</p>
                            </div>
                        </a>
                        <a href="https://github.com/StunnaDawg">
                            <div className="flex-item"> 
                                <h4>Discord Bot</h4>
                                <p>Coming soon!</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section> 
    )
}