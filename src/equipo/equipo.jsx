import React, { Component } from 'react';
import '../../public/img/lara.jpg';
import '../../public/img/kevin.jpg';
import '../../public/img/ines.jpg';
import '../../public/img/elder.jpg';
import '../../public/img/rodrigo.jpg';
import '../../public/img/mar.jpg';
import '../../public/img/alexa.jpg';
 
export default class Equipo extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="container mt-5 animated fadeIn slower">
        <div className="row mb-5">
          <div className="col-md-5 text-left">
            <h2 className="section-title mb-3">Equipo StepSound</h2>
            <p className="lead">Somos estudiantes de la Universidad Europea del Atlantico en las carreras de publicidad e informatica.</p>
          </div>
        </div>
        <div className="row">
          <div class="col-md-7 col-lg-4 mb-5">
            <div class="team-member">
              <figure>
                <img id="team" src="lara.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Lara Fernandez</h3>
                <span class="position">Estudiante de publicidad</span>
              </div>
            </div>
          </div>
          <div class="col-md-7 col-lg-4 mb-5">
            <div class="team-member">
              <figure>
                <img id="team" src="kevin.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Kevin Acuña</h3>
                <span class="position">Estudiante de informatica</span>
              </div>
            </div>
          </div>
          <div class="col-md-7 col-lg-4 mb-5">
            <div class="team-member">
              <figure>
                <img id="team" src="ines.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Ines Beteta</h3>
                <span class="position">Estudiante de publicidad</span>
              </div>
            </div>
          </div>
          <div class="col-md-7 col-lg-4 mb-5">
            <div class="team-member">
              <figure>
                <img id="team" src="elder.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Elder Bol</h3>
                <span class="position">Estudiante de informatica</span>
              </div>
            </div>
          </div>
          <div class="col-md-7 col-lg-4 mb-5">
            <div class="team-member">
              <figure>
                <img id="team" src="rodrigo.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Rodrigo Zaldaña</h3>
                <span class="position">Estudiante de informatica</span>
              </div>
            </div>
          </div>
          <div class="col-md-7 col-lg-4 mb-5">
            <div class="team-member">
              <figure>
                <img id="team" src="alexa.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Alexa Echeverria</h3>
                <span class="position">Estudiante de publicidad</span>
              </div>
            </div>
          </div>
          <div class="col-md-7 col-lg-4 mb-5">
          </div>
          <div class="col-md-7 col-lg-4 mb-5">
            <div class="team-member">
              <figure>
                <img id="team" src="mar.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Mar Horno</h3>
                <span class="position">Estudiante de publicidad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}