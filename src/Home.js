import React, { useEffect } from 'react';
const Home = () => {

    useEffect(()=> {
        let spanLoad = document.getElementById('loading');
        setInterval(() => {
            if (spanLoad.textContent.includes("...")) {
                spanLoad.textContent = "";
            }
            else {
                spanLoad.textContent += ".";
            };
            
        },500);
        
    })

    /* Affichage de l'accueil */
    return (
        <div id = "home">
            <div id="presentation">

                    <h1>Adrien Podsiadly</h1>
                    <p>Actuellement, je suis étudiant en licence informatique, passionnée par l'informatique depuis 2017 et par le côté développement web depuis 2019 pour son interactivité, sa créativité et son évolution constante. Cette découverte m'a donné l'envie de faire partie du monde du développement web plus précisément de devenir développeur Front-end.</p>
            </div>
            <div id = "formation">
            <h1>Formations</h1>
                    <p>J'ai obtenu un baccalauréat Sciences et Technologies du Développement Durable en 2019 qui m'a permis de faire un premier pas dans le monde de l'informatique.
                    À travers cette formation, j'ai pu obtenir les bases fondamental tel que le fonctionnement d'un ordinateur, la compréhension du binaire, la gestion de projets en groupe etc.
                    <br/>
                    <br/>
                    Par la suite j'ai intégré une licence informatique pour approfondir mes connaissances.
                    </p>
                    <ul>
                        <li>Première année validée</li>
                        <li>Deuxième année validée</li>
                        <li>Troisième année chargement en cours<span id='loading'></span></li>
                    </ul>
            </div>
        </div>
    );
};

export default Home;