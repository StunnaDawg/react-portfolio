import React from "react";
import ProjectDiv from "./Project";

export default function Portfolio() {
    return (
        <section className="projects" id="projects">
            <div className="project-container">
                <h2>Projects</h2>
                <div className="projects-main">
                    {/* insert props and desired values to display*/}
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
                    projectName="FitBuild"
                    link="https://fit-build-03ae366fc163.herokuapp.com/"
                    projectSide="N/A"
                    releaseState="Coming Soon"
                    />
                    <ProjectDiv
                    projectName="Chalk Line Renos"
                    link="N/A"
                    projectSide="N/A"
                    releaseState="Coming Soon"
                    />
                    <ProjectDiv
                    projectName="Chat App"
                    link="N/A"
                    projectSide="N/A"
                    releaseState="Coming Soon"
                    />
                    <ProjectDiv
                    projectName="Pokemon Social Network"
                    link="https://github.com/StunnaDawg/Pokemon-Social-Network"
                    projectSide="N/A"
                    releaseState="Live"
                    />
                </div>
            </div>
        </section>
    )
}