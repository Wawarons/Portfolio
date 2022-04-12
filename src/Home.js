import React from 'react';
const Home = () => {
    setTimeout(() => {
        const home = document.getElementById("home");
        const presentation = document.getElementById("presentation");
        const formation = document.getElementById("formation")
        let scrollMax = home.scrollHeight
        let userScroll = false 
        home.addEventListener("scroll", (e) => {
            let scrollNumber = e.target.scrollTop
            if (scrollNumber > 0 && scrollNumber < scrollMax) {
                userScroll = true
            }
            if (e.target.scrollTop > scrollMax/3) {
                formation.classList.remove("hidden");
                formation.classList.add("no-hidden")
                presentation.classList.remove("no-hidden")
                presentation.classList.add("hidden");
            }else{
                presentation.classList.remove("hidden");
                presentation.classList.add("no-hidden")
                formation.classList.remove("no-hidden")
                formation.classList.add("hidden");
            }
        })

        if (userScroll === false) {
            console.log(formation.offsetTop);
            setInterval(() => {
                home.scrollTop = formation.offsetHeight
            }, 20000)
            setInterval(() => {
                home.scrollTop = 0
            },40000)
        }

        
        
    }, 500)
    return (
        <div id = "home">
            <div id="presentation" className='no-hidden'>

                    <h1>Adrien Podsiadly</h1>
                    <p>Actuellement, je suis étudiant en licence informatique, passionnée par l'informatique depuis 2017 et par le côté développement web depuis 2019 pour son interactivité, sa créativité et son évolution constante. Cette découverte m'a donné l'envie de faire partie du monde du développement web plus précisément de devenir développeur Front-end.</p>
            </div>
            <div id = "formation" className='hidden'>
            <h1>Formation</h1>
                    <p>J'ai obtenu un baccalauréat Sciences et Technologies du Développement Durable en 2019 qui m'a permis d'obtenir les bases concernant le fonctionnement d'un ordinateur, tels que le binaire, les divers composants ect.
                    <br/>
                    <br/>
                    Puis j'ai intégré la  licence informatique pour approfondir mes connaissances. S'il y a une certaine aisance avec les langages de programmation, l'aspect mathématique de la licence n'est pas mon fort. J'ai donc décidé de redoubler ma deuxième année dans le but de corriger ces lacunes et de me consacrer à mes projets personnels comme la création de mon portfolio etc.
                    </p>
            </div>
        </div>
    );
};

export default Home;