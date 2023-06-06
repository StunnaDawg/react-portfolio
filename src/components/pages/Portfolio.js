import React from "react";
import ProjectDiv from "./Project";

export default function Portfolio() {
    return (
        <section className="projects" id="projects">
            <div className="project-container">
                <h2>Projects</h2>
                <div className="projects-main">
                    <ProjectDiv
                    projectName="Statistics Tracker"
                    link="https://github.com/roseandlily33/englishFootballTracker32"
                    projectSide="projects-right"
                    releaseState="Live"
                    />
                    <ProjectDiv
                    projectName="Budget Tracker"
                    link="https://github.com/Valerigionetnoel/Budget-tracker"
                    projectSide="projects-left"
                    releaseState="Live"
                    />
                    <ProjectDiv
                    projectName="Discord Bot"
                    link="N/A"
                    projectSide="N/A"
                    releaseState="Coming Soon"
                    />
                </div>
            </div>
        </section>
    )
}