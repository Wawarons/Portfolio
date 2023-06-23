import React from 'react';
import './App.css';
import {Redirect, BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Projets from './Projets';
import logo from './images/Logo.png';
import github from './images/github.png';
import Contact from './Contact';
import Competences from './Competences';


function App() {

  return (
    <BrowserRouter basename = "/Portfolio">
    <div className="App">
      {/* Barre de navigation */}
        <nav>
          <img id = "logo" src = {logo} alt="logo" />

          {/* Différente catégories */}
          <div id="categories">
              <Link to ="/">Accueil</Link>
              <Link to ="/Projets">Projets</Link>
              <Link to ="/Competences">Competences</Link>
              <Link to ="/Contact">Contact</Link>
          </div>
          {/* Logo pour les RS */}
          <div id = "reseaux">
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
          <Route exact path = "*">
            <Redirect to='/' />
          </Route>
        </Switch>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
