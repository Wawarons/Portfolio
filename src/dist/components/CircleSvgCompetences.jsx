import React from "react";


const CircleSvgCompetences = ({tailleCircleSvg, pourcentage, name}) => {
    return (
        <div className="svg-container">
                <svg height= {`${tailleCircleSvg*2}`} width= {`${tailleCircleSvg*2}`} stroke = "#000">
                    <circle className = "circle_competences" data-pourcentage = {`${pourcentage}`} cx= {`${tailleCircleSvg}`} cy= {`${tailleCircleSvg}`} r= {`${tailleCircleSvg - 10}`} id = "circleSvg_react"/>
                    <text x ="50%" y="50%" textAnchor = "middle">{`${name}`}</text>
                </svg>
            </div>
    );

}

export default CircleSvgCompetences;