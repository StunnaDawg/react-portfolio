import React from "react";

export default function ProjectDiv ({
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