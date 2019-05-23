import React, { Component } from 'react';
import '../styles/App.css';
import '../public/img/oficial_logo.png';
import '../public/img/logo.png';
import Portada from './portada/portada';
import Inicio from './inicio/inicio';
import Participar from './participar/participar';
import Equipo from './equipo/equipo';
import Exclusivo from './exclusivo/exlusivo';
import ExclusivoDisabled from './exclusivo/exclusivoDisabled';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exclusivoDisabled : true
    }
  }

  componentDidMount() {
    try {
      const historialPreguntasRespondidas = JSON.parse(localStorage.getItem('historialPreguntasRespondidas'));
      if (historialPreguntasRespondidas != null) {
        if (!(historialPreguntasRespondidas.length == 0 || historialPreguntasRespondidas.length == undefined)) {
          if (historialPreguntasRespondidas[historialPreguntasRespondidas.length - 1].correcta && historialPreguntasRespondidas.length == 10) {
            this.setState({exclusivoDisabled:false});
          }
        }
      }
  } catch (error) {
      console.error(error, " error al montar la iformacion desde localStorage");
  }
}

  render() {
    const { exclusivoDisabled } = this.state;
    return (
      <Router>
        <div className="App">
          <nav className="navbar fixed-top navbar-light navbar-expand-lg justify-content-end" id="mainNav">
            <a className="navbar-brand mx-auto" href="/">
              <img src="oficial_logo.png" className="App-logo" alt="logo" />
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggler"
              aria-controls="navbarNavAltMarkup" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse collapse justify-content-end" id="navbarToggler">
              <ul className="navbar-nav text-center">
                 <li className="nav-item navbar-text">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item navbar-text">
                  <Link className="nav-link" to="/comenzar">Comenzar</Link>
                </li>
                <li className="nav-item navbar-text">
                  <Link className="nav-link" to="/participar">¿Cómo participar?</Link>
                </li>
                <li className="nav-item navbar-text">
                  <Link className="nav-link" to="/equipo">¿Quiénes somos?</Link>
                </li>
                <li className="nav-item navbar-text">
                  <Link className="nav-link" to="/exclusivo">Contenido exclusivo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <main>
            <Route exact path="/" component={Portada} />
            <Route path="/comenzar" render={() => <Inicio showExclusivo={() => this.setState({exclusivoDisabled: false})}/>} />
            <Route path="/participar" component={Participar} />
            <Route path="/equipo" component={Equipo} />
            {
              exclusivoDisabled ? <Route path="/exclusivo" component={ExclusivoDisabled}/> : <Route path="/exclusivo" component={Exclusivo} />
            }
          </main>

          <footer className="page-footer site-footer darken-4">
            <div className="container ">
              <div className="row">
                <div className="col l3 s12">
                  <h5 className="white-text">Step Sound</h5>
                  <p className="grey-text text-lighten-4">
                   #NoPausesTusSueños
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
                        <i className="fab fa-twitter" />
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
                        <i className="fab fa-instagram" />
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
                        <i className="fas fa-envelope" />
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
                        <i className="fab fa-youtube" />
                        {` Youtube`}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-16">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe
                        width="350"
                        height="150"
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
