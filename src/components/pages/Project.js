import React from "react";

export default function ProjectDiv ({
/* props to show multiple projects */
    projectName,
    link,
    projectSide,
    releaseState, 
    background, 
    backgroundOption, 
    postion
    }) {
    return (
        <div className={projectSide} >
            <a href={link}>
                <div className="flex-item" id="big-item"  style={{backgroundImage: `url(${background})`,  backgroundSize: backgroundOption, backgroundPosition: postion}}>
                    <h4 style={{color: "white", }}>{projectName}</h4>
                </div>
            </a> 
        </div> 
    )
}