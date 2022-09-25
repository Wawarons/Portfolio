import React, { useEffect } from 'react';
import CircleSvgCompetences from './dist/components/CircleSvgCompetences';

const Competences = () => {
    const cirlceList = [
        {
            tailleCircleSvg: 105,
            pourcentage: 95,
            name: "Html", 
            color: 'Orange'
        },
        {
            tailleCircleSvg: 105,
            pourcentage: 80,
            name: "Css", 
            color: 'skyblue'
        },
        {
            tailleCircleSvg: 105,
            pourcentage: 70,
            name: "JavaScript", 
            color: 'yellow'
        },
        {
            tailleCircleSvg: 105,
            pourcentage: 60,
            name: "Scss", 
            color: 'pink'
        },
        {
            tailleCircleSvg: 105,
            pourcentage: 50,
            name: "React", 
            color: 'blue'
        }
    ];
    const ListCircleSvg = []; 
    const CirclesSvg = () => {
            cirlceList.forEach((circle, id) => {
                ListCircleSvg.push(<CircleSvgCompetences key = {`circle_svg_${id}`} tailleCircleSvg={circle.tailleCircleSvg} pourcentage = {circle.pourcentage} name = {circle.name} color = {circle.color}></CircleSvgCompetences>);
            });
            return ListCircleSvg;
    }    

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
            {CirclesSvg()}
        </div>
        </div>
    );
};

export default Competences;