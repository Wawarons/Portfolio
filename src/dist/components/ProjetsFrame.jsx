import React from "react";

const ProjetsFrame = ({url, img, title}) => {

    /* Présentation des projets */
    return (
        <div className = "projet">
                    <div className = "projet-img">
                        <a href= {url} target = "_blank" rel="noreferrer"><img src={img} alt={`Projet ${title}`}/></a>
                    </div>
                <h3>{title}</h3>
                </div>
    )
}


export default ProjetsFrame