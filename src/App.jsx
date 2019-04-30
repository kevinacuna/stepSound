import React, { Component } from "react";
import "../styles/App.css";
import "../public/img/logo.png";
import Portada from "./portada/Portada";
import Inicio from "./inicio/inicio";
import Participar from "./participar/participar";
import Equipo from "./equipo/equipo";
import Exclusivo from "./exclusivo/exlusivo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar fixed-top navbar-dark navbar-expand-sm justify-content-end">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggler"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <a className="navbar-brand mx-auto" href="/">
              <img src="logo.png" className="App-logo" alt="logo" />
            </a>

            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item navbar-text">
                  <Link to="/inicio">Inicio</Link>
                </li>
                <li className="nav-item navbar-text">
                  <Link to="/participar">¿Cómo Participar?</Link>
                </li>
                <li className="nav-item navbar-text">
                  <Link to="/equipo">¿Quienes somos?</Link>
                </li>
                <li className="nav-item navbar-text">
                  <Link to="/exclusivo">Contenido exclusivo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <main>
            <Route exact path="/" component={Portada} />
            <Route path="/inicio" component={Inicio} />
            <Route path="/participar" component={Participar} />
            <Route path="/equipo" component={Equipo} />
            <Route path="/exclusivo" component={Exclusivo} />
          </main>

          <footer className="page-footer site-footer darken-4">
            <div className="container ">
              <div className="row">
                <div className="col l3 s12">
                  <h5 className="white-text">Footer Content</h5>
                  <p className="grey-text text-lighten-4">
                    You can use rows and columns here to organize your footer
                    content.
                  </p>
                </div>
                <div className="col l3 s12">
                  <ul>
                    <li>
                      <a
                        href="https://twitter.com/stepsound_"
                        className="grey-text text-lighten-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fab fa-twitter" />
                        {` Twitter`}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/stepsound_/?hl=es"
                        className="grey-text text-lighten-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fab fa-instagram" />
                        {` Instagram`}
                      </a>
                    </li>
                    <li>
                      <a
                        className="grey-text text-lighten-3"
                        href="mailto:stepsound2019@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fas fa-envelope" />
                        {` Gmail`}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCsI8pt7NVaGM1w2E4XXXYaA"
                        className="grey-text text-lighten-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fab fa-youtube" />
                        {` Youtube`}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col l6 s12">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe
                        width="600"
                        height="200"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=uneatlantico&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-top footer-copyright">
              <div className="container">
                <a className="grey-text right"> ©2019 Step Sound 2019</a>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}
