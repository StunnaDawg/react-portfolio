import React from "react";

export default function ProjectDiv ({
/* props to show multiple projects */
    projectName,
    link,
    projectSide,
    releaseState
    }) {
    return (
        <div className={projectSide}>
            <a href={link}>
                <div className="flex-item" id="big-item">
                    <h4>{projectName}</h4>
                    <p>{releaseState}</p>
                </div>
            </a> 
        </div> 
    )
}