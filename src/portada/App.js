import React, { Component } from 'react';
import '../../styles/App.css';
import '../../public/logoSS.svg';

class App extends Component {
  render() {
    return (
      <div className="App">

      <nav>
        <div class="nav-wrapper deep-orange darken-4">
          <img src="logoSS.svg" className="App-logo" alt="logo" />
          <ul id="nav-mobile" class="right hide-on-med-and-down">
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

      <div class="row">
        <div class="col s8">
          <img src="data:image/jpeg;base64,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" className="Img-portada" alt="logo" />
        </div>
        <div class="col s4">
          <p> Texto descriptivo del juego </p>
          <a class="waves-effect deep-orange darken-4 btn">button con enlace a inicio</a>
        </div>
      </div>
      <footer class="page-footer deep-orange darken-4">
          <div class="container ">
            <div class="row">
              <div class="col l3 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l3 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3">Red social 1</a></li>
                  <li><a class="grey-text text-lighten-3">Red social 2</a></li>
                  <li><a class="grey-text text-lighten-3">Red social 3</a></li>
                  <li><a class="grey-text text-lighten-3">Red social 4</a></li>
                </ul>
              </div>
              <div class="col l6 s12">
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe width="600" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=uneatlantico&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe>
                    Google Maps Generator by 
                    <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
              © 2019 Copyright Text
              <a class="grey-text text-lighten-4 right">Más Links</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
