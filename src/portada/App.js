import React, { Component } from 'react';
import '../../styles/App.css';
import '../../public/img/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">

      <nav>
        <div className="nav-wrapper deep-orange darken-4">
          <img src="logo.svg" className="App-logo" alt="logo" />
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>¿Cómo Participar?</a>
            </li>
            <li>
              <a>Quienes somos</a>
            </li>
            <li>
              <a>Contenido exclusivo</a>
            </li>
          </ul>
        </div>
      </nav> 
      <div className="site-blocks-cover overlay Img-portada" data-aos="fade" id="home-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
              <div className="col-md-6 mt-lg-5 text-center">
                <h1>Step Sound</h1>
                <p className="mb-5">Que somos</p>
                <button href="#" className="btn btn-primary mr-2 mb-2">Ingresar</button>
              </div>   
        </div>
      </div>
    </div> 
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
    );
  }
}

export default App;
