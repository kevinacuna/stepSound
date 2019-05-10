import React, { Component } from 'react';
import '../../public/img/LaraBN.jpg';
import '../../public/img/KevinBN.jpg';
import '../../public/img/ines.jpg';
import '../../public/img/ElderBN.jpg';
import '../../public/img/RodrigoBN.jpg';
import '../../public/img/MarBN.jpg';
import '../../public/img/AlexandraBN.jpg';

import '../../public/img/lara2.jpg';
import '../../public/img/kevin2.jpg';
import '../../public/img/elder2.jpg';
import '../../public/img/rodrigo2.jpg';
import '../../public/img/mar2.jpg';
import '../../public/img/alexandra2.jpg';
 
export default class Equipo extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="container mt-5 animated fadeIn slower">
        <div className="row mb-5">
          <div className="col-md-12 text-center">
            <center>
              <h2 className="section-title mb-3">Equipo StepSound</h2>
              <p className="lead">Somos estudiantes de la Universidad Europea del Atlantico en las carreras de publicidad e informatica.</p>
              <p className="lead">
                Step sound es una historia creada para un proyecto de la Universidad Europea del Atlántico por alumnos de Publicidad
                y Relaciones Públicas e Ingeniería Informática en la asignatura de Creación de Productos Audiovisuales y Multimedia.
              </p>
              <p className="lead">
                Con el fin de crear un producto genérico, en este caso, unos auriculares a transmedia. El cual ha sido desarrollado
                a través de una historia interactiva y divertida.
              </p>
            </center>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 col-lg-4 mb-5">
            <div className="team-member">
              <figure>
                <img id="team" src="LaraBN.jpg" onMouseOver={e => e.currentTarget.src = "lara2.jpg"} onMouseOut={e => e.currentTarget.src = "LaraBN.jpg"} alt="Image" className="rounded-circle"/>
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
                <img id="team" src="RodrigoBN.jpg" onMouseOver={e => e.currentTarget.src = "rodrigo2.jpg"} onMouseOut={e => e.currentTarget.src = "RodrigoBN.jpg"} alt="Image" className="rounded-circle"/>
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
                <img id="team" src="ines.jpg" onMouseOver={e => e.currentTarget.src = "ines2.jpg"} onMouseOut={e => e.currentTarget.src = "ines.jpg"} alt="Image" className="rounded-circle"/>
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
                <img id="team" src="ElderBN.jpg" onMouseOver={e => e.currentTarget.src = "elder2.jpg"} onMouseOut={e => e.currentTarget.src = "ElderBN.jpg"} alt="Image" className="rounded-circle"/>
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
                <img id="team" src="MarBN.jpg" onMouseOver={e => e.currentTarget.src = "mar2.jpg"} onMouseOut={e => e.currentTarget.src = "MarBN.jpg"} alt="Image" className="rounded-circle"/>
              </figure>
              <div className="p-3">
                <center>
                  <h3>Mar Horna</h3>
                  <span className="position">Estudiante de publicidad</span>
                </center>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-4 mb-5">
            <div className="team-member">
              <figure>
                <img id="team" src="AlexandraBN.jpg" onMouseOver={e => e.currentTarget.src = "alexandra2.jpg"} onMouseOut={e => e.currentTarget.src = "AlexandraBN.jpg"} alt="Image" className="rounded-circle"/>
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
                <img id="team" src="KevinBN.jpg" onMouseOver={e => e.currentTarget.src = "kevin2.jpg"} onMouseOut={e => e.currentTarget.src = "KevinBN.jpg"} alt="Image" className="rounded-circle"/>
              </figure>
              <div className="p-3">
                <center>
                  <h3>Kevin Acuña</h3>
                  <span className="position">Estudiante de informatica</span>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}