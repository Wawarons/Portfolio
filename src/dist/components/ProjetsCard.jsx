import React from "react";


const ProjetsCard = ({title, url, description, langages, number, ProjetImg}) => {
    const langagesList = []

    /* Récupère la liste des langages utiliser */
    const getLangages = (langages) =>  {
        langages.forEach((element, index) => {
            langagesList.push(<li key = {index}>{element}</li>)
        });

        return langagesList
    }
    
    /* Affichage des descriptions des projets*/
    return (
        <div id={`projet-${number}`}>
                    <h2>{title}</h2>
                    <div className="details-projets">
                        <div className = "projet-img">
                            <a href={url} target = "_blank" rel="noreferrer"><img src = {ProjetImg} alt={`Projet ${title}`} /></a>
                        </div>
                        <div id ="description-site">
                            <p>{description}</p>

                            <ul id='langages'>
                                {getLangages(langages)}
                            </ul>
                        </div>
                    </div>
        </div>
    )
}


export default ProjetsCard