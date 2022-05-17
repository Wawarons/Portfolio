import React from 'react';
import ProjetsCard from './dist/components/ProjetsCard';
import FreeGamesProjetImg from './images/FreeGamesProjet.png';
import PortfolioProjetImg from './images/PortfolioProjet.png';
import CalculatriceProjetImg from './images/CalculatriceProjet.png';
import ProjetsFrame from './dist/components/ProjetsFrame';

const Projets = () => {
    const Projets = []
    const ProjetsVitrine = []
    const projetsListe = 

    /* Liste des projets avec leurs details */
    [   {
                        'title': "Portfolio",

                        'url': "https://wawarons.github.io/Portfolio",

                        'description': "Création de mon portfolio. Ce site a été créé dans le but de donner un aperçu de mes compétences et du travail que je peux offrir en résumant les différents projets que j'ai réalisés jusqu'à présent. Et contient un résumé de mes compétences.", 

                        'langages': ['Javascript','ReactJS','HTML','CSS/SCSS'],
                        
                        'number': 1, 
                        
                        'ProjetImg': PortfolioProjetImg
                    },
        {
                        'title': "Free-Games",

                        'url': "https://wawarons.github.io/Free-Games/",

                        'description': "Un site Web appelé Free Games qui dévoile les données de milliers de jeux vidéo pouvant être joués sur différentes plateformes. La particularité de ces jeux est qu'ils sont tous gratuits. Ce site est construit à l'aide de l'API de base de données de jeux free-to-play Games Database.", 

                        'langages': ['Javascript','ReactJS','HTML','CSS/SCSS'],
                        
                        'number': 2, 
                        
                        'ProjetImg':  FreeGamesProjetImg
                    },
        {
                        'title': "Calculatrice",

                        'url': "https://wawarons.github.io/Calculatrice/",

                        'description': "Site web représentant une calculatrice permettant de faire divers calculs basiques, additions, soustractions, divisions.", 

                        'langages': ['Javascript','HTML','CSS/SCSS'],
                        
                        'number': 3, 
                        
                        'ProjetImg': CalculatriceProjetImg
                    }

    ]

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