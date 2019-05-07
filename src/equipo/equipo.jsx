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
          <div className="col-md-7 col-lg-4 mb-5">
            <div className="team-member">
              <figure>
                <img id="team" src="lara.jpg" alt="Image" className="rounded-circle"/>
              </figure>
              <div className="p-3">
                <center>
                  <h3>Lara Fernández</h3>
                  <span className="position">Estudiante de publicidad</span>
                </center>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-4 mb-5">
            <div className="team-member">
              <figure>
                <img id="team" src="kevin.jpg" alt="Image" className="rounded-circle"/>
              </figure>
              <div className="p-3">
                <center>
                  <h3>Kevin Acuña</h3>
                  <span className="position">Estudiante de informatica</span>
                </center>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-4 mb-5">
            <div className="team-member">
              <figure>
                <img id="team" src="ines.jpg" alt="Image" className="rounded-circle"/>
              </figure>
              <div className="p-3">
                <center>
                  <h3>Inés Beteta</h3>
                  <span className="position">Estudiante de publicidad</span>
                </center>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-4 mb-5">
            <div className="team-member">
              <figure>
                <img id="team" src="elder.jpg" alt="Image" className="rounded-circle"/>
              </figure>
              <div className="p-3">
                <center>
                  <h3>Elder Bol</h3>
                  <span className="position">Estudiante de informatica</span>
                </center>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-4 mb-5">
            <div className="team-member">
              <figure>
                <img id="team" src="rodrigo.jpg" alt="Image" className="rounded-circle"/>
              </figure>
              <div className="p-3">
                <center>
                  <h3>Rodrigo Zaldaña</h3>
                  <span className="position">Estudiante de informatica</span>
                </center>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-4 mb-5">
            <div className="team-member">
              <figure>
                <img id="team" src="alexa.jpg" alt="Image" className="rounded-circle"/>
              </figure>
              <div className="p-3">
                <center>
                  <h3>Alexandra Velásquez</h3>
                  <span className="position">Estudiante de publicidad</span>
                </center>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-4 mb-5">
          </div>
          <div className="col-md-7 col-lg-4 mb-5">
            <div className="team-member">
              <figure>
                <img id="team" src="mar.jpg" alt="Image" className="rounded-circle"/>
              </figure>
              <div className="p-3">
                <center>
                  <h3>Mar Horna</h3>
                  <span className="position">Estudiante de publicidad</span>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}