import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Projets from './Projets';
import logo from './images/Logo.png';
import twitter from './images/twitter.png';
import instagram from './images/instagram.png';
import github from './images/github.png';
import Contact from './Contact';
import Competences from './Competences';
const tailleLogo = 65;
var circleValue = 5;

function App() {
  //Si le cercle est cliqué le changer de couleur et mettre tout les autres en blanc
  const gestionColorCircleSlide = (e) => {
    //reset tout les cercles en gris 
    document.querySelectorAll('.circleLink').forEach((circle) => {
      circle.style.fill = "#c4c4c4"
    
    /* Si l'élément cliqué est un élément de la nav */
    if (e.target.textContent) {
      if(circle.id === `circle_${e.target.textContent.toLowerCase()}`){
        circle.style.fill = "black";
      }
    }else{
      e.target.style.fill = "black";
    }
  })

  }


  return (
    <BrowserRouter basename = "Portfolio">
    <div className="App">
      {/* Barre de navigation */}
        <nav>
          <img id = "logo" src = {logo} alt="logo" style = {{width: `${tailleLogo}px`, height: `${tailleLogo}px`}}/>

          {/* Différente catégories */}
          <div id="categories">
              <Link to ="/" onClick = {(e) => gestionColorCircleSlide(e)}>Accueil</Link>
              <Link to ="/Projets" onClick = {(e) => gestionColorCircleSlide(e)}>Projets</Link>
              <Link to ="/Competences" onClick = {(e) => gestionColorCircleSlide(e)}>Competences</Link>
              <Link to ="/Contact" onClick = {(e) => gestionColorCircleSlide(e)}>Contact</Link>
          </div>
          {/* Logo pour les RS */}
          <div id = "reseaux">
              <a href="https://twitter.com/Wawarons" target = "_blank" rel="noreferrer"><img src={twitter} alt="twitter logo" /></a>
              <a href="https://instagram.com/adrien_pods" target = "_blank" rel="noreferrer"><img src={instagram} alt="instagram logo" /></a>
              <a href="https://github.com/Wawarons" target = "_blank" rel="noreferrer" ><img src={github} alt="github logo" /></a>
          </div>
        </nav>
        {/* Contenue de la page */}
        <div id = "contain">
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route exact path = "/Projets">
            <Projets/>
          </Route>
          <Route exact path = "/Contact">
            <Contact/>
          </Route>
          <Route exact path = "/Competences">
            <Competences/>
          </Route>
        </Switch>
        </div>

        {/* Cercles pour situer les pages */}
        <div className="ellipses">
          <svg width = {`${circleValue*2}px`} height = {`${circleValue*2}px`} onClick = {(e) => gestionColorCircleSlide(e)}>
            <Link to = "/">
                  <circle className = "circleLink" id = "circle_accueil" cx = {`${circleValue}px`} cy = {`${circleValue}px`} r = {`${circleValue}px`} fill = "black"></circle>
            </Link>
          </svg>

            <svg width = {`${circleValue*2}px`} height = {`${circleValue*2}px`} onClick = {(e) => gestionColorCircleSlide(e)}>
          <Link to = "/Projets">
                <circle className = "circleLink" id = "circle_projets" cx = {`${circleValue}px`} cy = {`${circleValue}px`} r = {`${circleValue}px`} fill = "#c4c4c4"></circle>
          </Link>
            </svg>

            <svg width = {`${circleValue*2}px`} height = {`${circleValue*2}px`} onClick = {(e) => gestionColorCircleSlide(e)}>
          <Link to = "/Competences">
                <circle className = "circleLink" id = "circle_competences" cx = {`${circleValue}px`} cy = {`${circleValue}`} r = {`${circleValue}px`} fill = "#c4c4c4"></circle>
          </Link>
            </svg>
            
            <svg width = {`${circleValue*2}px`} height = {`${circleValue*2}px`} onClick = {(e) => gestionColorCircleSlide(e)}>
          <Link to = "/contact">
                <circle className = "circleLink" id = "circle_contact" cx = {`${circleValue}px`} cy = {`${circleValue}`} r = {`${circleValue}px`} fill = "#c4c4c4"></circle>
          </Link>
            </svg>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
