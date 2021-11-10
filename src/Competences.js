import React, { useEffect } from 'react';

const Competences = () => {
    const tailleCircleSvg = 105;
    useEffect(() => {
        document.querySelectorAll(".circle_competences").forEach((circle) => {
            const pourcentage = circle.dataset.pourcentage;
            circle.style.strokeDashoffset = `${535 - (535*(pourcentage/100))}`
            circle.style.animation = "pourcentagesLoad 2s ease-in-out";
        })
        
    }, [])
    return (
        <div id="contain-competences">
        <div id = "competences">
            <div className="svg-container">
                <svg height= {`${tailleCircleSvg*2}`} width= {`${tailleCircleSvg*2}`}>
                    <circle className = "circle_competences" data-pourcentage = "95" cx= {`${tailleCircleSvg}`} cy= {`${tailleCircleSvg}`} r= {`${tailleCircleSvg - 10}`} id = "circleSvg_html"/>
                    <text x ="50%" y="50%" textAnchor = "middle">Html</text>
                </svg>
            </div>
            <div className="svg-container">
                <svg height= {`${tailleCircleSvg*2}`} width= {`${tailleCircleSvg*2}`}>
                    <circle className = "circle_competences" data-pourcentage = "90" cx= {`${tailleCircleSvg}`} cy= {`${tailleCircleSvg}`} r= {`${tailleCircleSvg - 10}`} id = "circleSvg_css"/>
                    <text x ="50%" y="50%" textAnchor = "middle">CSS</text>
                </svg>
            </div>
            <div className="svg-container">
                <svg height= {`${tailleCircleSvg*2}`} width= {`${tailleCircleSvg*2}`}>
                    <circle className = "circle_competences" data-pourcentage = "70" cx= {`${tailleCircleSvg}`} cy= {`${tailleCircleSvg}`} r= {`${tailleCircleSvg - 10}`} id = "circleSvg_javascript"/>
                    <text x ="50%" y="50%" textAnchor = "middle">JavaScript</text>
                </svg>
            </div>
            <div className="svg-container">
                <svg height= {`${tailleCircleSvg*2}`} width= {`${tailleCircleSvg*2}`}>
                    <circle className = "circle_competences" data-pourcentage = "45" cx= {`${tailleCircleSvg}`} cy= {`${tailleCircleSvg}`} r= {`${tailleCircleSvg - 10}`} id = "circleSvg_sass"/>
                    <text x ="50%" y="50%" textAnchor = "middle">Sass</text>
                </svg>
            </div>
        </div>
        </div>
    );
};

export default Competences;