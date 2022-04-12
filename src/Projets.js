import React from 'react';
import FreeGamesProjetImg from './images/FreeGamesProjet.png';
import PortfolioProjetImg from './images/PortfolioProjet.png';
import CalculatriceProjet from './images/CalculatriceProjet.png';

const Projets = () => {
    return (
        <div id="projets">
            <div id = "contain-projets">

                <div className = "projet">
                    <div className = "projet-img">
                        <a href="https://Wawarons.github.io/Free-Games" target = "_blank" rel="noreferrer"><img src={FreeGamesProjetImg} alt="Projet Free-Games" /></a>
                    </div>
                <h3>Free Games</h3>
                </div>

                <div className="projet">
                    <div className="projet-img">
                        <a href="https://Wawarons.github.io/Portfolio" target = "_blank" rel="noreferrer"><img src={PortfolioProjetImg} alt="Projet Portfolio" /></a>
                    </div>
                    <h3>Portfolio</h3>
                </div>

                <div className="projet">
                    <div className="projet-img">
                        <a href="https://Wawarons.github.io/Calculatrice" target = "_blank" rel="noreferrer"><img src={CalculatriceProjet} alt="Projet Calculatrice" /></a>
                    </div>
                    <h3>Calculatrice</h3>
                </div>

            </div>

            <div id="explication-projets">
                <div id="projet-1">
                    <h2>Portfolio</h2>
                    <div className="details-projets">
                        <div className = "projet-img">
                            <a href="https://Wawarons.github.io/Portfolio" target = "_blank" rel="noreferrer"><img src={PortfolioProjetImg} alt="Projet Free-Games" /></a>
                        </div>
                        <div id ="description-site">
                            <p>Création de mon potfolio. Ce site a été créé dans le but de donner un aperçu de mes compétences et du travail que je peux offrir en résumant les différents projets que j'ai réalisés jusqu'à présent.
                            Et contient un résumé de mes compétences.</p>

                            <ul id='langages'>
                                <li>Javascript</li>
                                <li>ReactJS</li>
                                <li>HTML</li>
                                <li>CSS/SCSS</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="projet-2">
                    <h2>Free Games</h2>
                    <div className="details-projets">
                    <div className = "projet-img">
                        <a href="https://Wawarons.github.io/Free-Games" target = "_blank" rel="noreferrer"><img src={FreeGamesProjetImg} alt="Projet Free-Games" /></a>
                    </div>
                    <div id ="description-site">
                    <p>Un site Web appelé Free Games qui dévoile les données de milliers de jeux vidéo pouvant être joués sur différentes plateformes. La particularité de ces jeux est qu'ils sont tous gratuits. Ce site est construit à l'aide de l'API de base de données de jeux <a href='https://www.freetogame.com/api-doc' target="_blank" rel = "noreferrer">free-to-play Games Database.</a></p>

                    <ul id='langages'>
                        <li>Javascript</li>
                        <li>ReactJS</li>
                        <li>HTML</li>
                        <li>CSS/SCSS</li>
                    </ul>
                    </div>

                </div>
                </div>
                <div id="projet-3">
                    <h2>Calculatrice</h2>
                    <div className="details-projets">
                        <div className = "projet-img">
                            <a href="https://Wawarons.github.io/Calculatrice" target = "_blank" rel="noreferrer"><img src={CalculatriceProjet} alt="Projet Free-Games" /></a>
                        </div>
                        <div id ="description-site">
                        <p>Site web représentant une calculatrice permettant de faire divers calculs basique, additions, soustractions, divisions</p>

                        <ul id='langages'>
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                        </div>

                </div>
                </div>
            </div>
        </div>
    );
};

export default Projets;