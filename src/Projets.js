import React from 'react';
import FreeGamesProjetImg from './images/FreeGamesProjet.png';
import PortfolioProjetImg from './images/PortfolioProjet.png';
import CalculatriceProjet from './images/CalculatriceProjet.png';

const Projets = () => {
    return (
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
    );
};

export default Projets;