import React, { useEffect } from 'react';
import CircleSvgCompetences from './dist/components/CircleSvgCompetences';
import data from './data.json';

const Competences = () => {

    const ListCircleSvg = [];
    const CirclesSvg = () => {
        data.cirlceList.forEach((circle, id) => {
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