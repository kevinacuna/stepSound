import React, { Component } from 'react';
import '../styles/App.css';
import '../public/img/logo.svg';
import Portada from './portada/Portada';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  Index(){
    return <div> Index</div>
  }

  render() {
    return (
      <Router>
        <div className="App">
        <nav>
          <div className="nav-wrapper deep-orange darken-4">
            <Link to="/">
              <img src="logo.svg" className="App-logo" alt="logo" />
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/inicio">Inicio</Link>
              </li>
              <li>
                <Link to="/participar">¿Cómo Participar?</Link>
              </li>
              <li>
                <Link to="/equipo">Quienes somos</Link>
              </li>
              <li>
                <Link to="/exclusivo">Contenido exclusivo</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route exact path="/" component={Portada} />
        <Route path="/inicio" component={Portada} />
        <Route path="/participar" component={Portada} />
        <Route path="/equipo" component={Portada} />
        <Route path="/exclusivo" component={Portada} />
        <footer className="page-footer deep-orange darken-4">
            <div className="container ">
              <div className="row">
                <div className="col l3 s12">
                  <h5 className="white-text">Footer Content</h5>
                  <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
                <div className="col l3 s12">
                  <h5 className="white-text">Links</h5>
                  <ul>
                    <li><a className="grey-text text-lighten-3">Red social 1</a></li>
                    <li><a className="grey-text text-lighten-3">Red social 2</a></li>
                    <li><a className="grey-text text-lighten-3">Red social 3</a></li>
                    <li><a className="grey-text text-lighten-3">Red social 4</a></li>
                  </ul>
                </div>
                <div className="col l6 s12">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe width="600" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=uneatlantico&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                      </iframe>
                      Google Maps Generator by 
                      <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
                © 2019 Copyright Text
                <a className="grey-text text-lighten-4 right">Step Sound 2019</a>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
