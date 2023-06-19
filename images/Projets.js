import React from 'react';
import ProjetsCard from './dist/components/ProjetsCard';
import ProjetsFrame from './dist/components/ProjetsFrame';
import data from './data.json';

const Projets = () => {
    const Projets = []
    const ProjetsVitrine = []
    const projetsListe = data.projets;

    /* Liste des projets avec leurs details */

    /* Présentation des projets*/ 
    const ProjetPresentation = () => {
        projetsListe.forEach((element, index) => {
            ProjetsVitrine.push(<ProjetsFrame key = {index} title = {element.title} url = {element.url} img = {element.ProjetImg}></ProjetsFrame>)
        })

        return ProjetsVitrine
    }
    /* Description des projets */
    const projetsDescription = () => {
        projetsListe.forEach((element, index) => {
            /* title, url, description, langages, number, ProjetImg */
            Projets.push(<ProjetsCard key = {index} title = {element.title} url = {element.url} description = {element.description} langages = {element.langages} number =  {element.number} ProjetImg = {element.ProjetImg}></ProjetsCard>)

        }); 

        return Projets
    }

    /* Affichage */
    return (
        <div id="projets">
            <div id = "contain-projets">
                {ProjetPresentation()}
            </div>

            <div id="explication-projets">
                {projetsDescription()}
            </div>
        </div>
    );
};

export default Projets;