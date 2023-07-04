import React from "react";
import ProjectDiv from "./Project";
import FitbuildImg from "./images/FitBuildDash.png"
import BudgetTrackerImg from "./GitHub-Logos/GitHub_Logo_White.png"
import StatsTracker from "./images/StatsTracker.png"

export default function Portfolio() {
    return (
        <section className="projects" id="projects">
            <div className="project-container">
                <h2>Projects</h2>
                <div className="projects-main">
                    {/* insert props and desired values to display*/} 
                    <ProjectDiv
                    background= {FitbuildImg}
                    backgroundOption='cover'
                    link="https://fit-build-03ae366fc163.herokuapp.com/"
                    projectSide="N/A"
                    releaseState="Live"
                    />
                    <ProjectDiv
                    background= {StatsTracker}
                    backgroundOption='cover'
                    postion='left center'
                    link="https://github.com/roseandlily33/englishFootballTracker32"
                    projectSide="projects-right"
                    releaseState="Live"
                    />
                    <ProjectDiv
                    background= {BudgetTrackerImg}
                    projectName="Budget Tracker"
                    link="https://github.com/Valerigionetnoel/Budget-tracker"
                    projectSide="projects-left"
                    releaseState="Live"
                    />
                </div>
            </div>
        </section>
    )
}