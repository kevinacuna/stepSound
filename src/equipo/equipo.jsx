import React, { Component } from "react";
import "../../public/img/LaraBN.jpg";
import "../../public/img/KevinBN.jpg";
import "../../public/img/ines.jpg";
import "../../public/img/ElderBN.jpg";
import "../../public/img/RodrigoBN.jpg";
import "../../public/img/MarBN.jpg";
import "../../public/img/AlexandraBN.jpg";

import "../../public/img/lara2.jpg";
import "../../public/img/kevin2.jpg";
import "../../public/img/elder2.jpg";
import "../../public/img/rodrigo2.jpg";
import "../../public/img/mar2.jpg";
import "../../public/img/alexandra2.jpg";

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
              <h1 className="section-title mb-3">EQUIPO STEP SOUND</h1>
              <hr className="divider my-4" />
              <p className="lead">
                Step sound es una historia ficticia creada por alumnos de
                Publicidad y Relaciones Públicas e Ingeniería Informática de la
                Universidad Europea del Atlántico para la asignatura de Creación
                de Productos Audiovisuales y Multimedia.
              </p>
              <p className="lead">
                Step sound surge con el fin de crear un producto transmedia y
                para ello hemos desarrollado en nuestra página web un juego
                interactivo en base a una historia.
              </p>
              <p className="lead">
                Toda la información necesaria la podréis encontrar en nuestra
                página web. Además podréis seguir los avances a través de
                nuestras redes sociales de Twitter, Instagram y Youtube en las
                que también encontrareis contenido exclusivo. No olvidéis
                contactar con nosotros en caso de cualquier duda a la hora de
                seguir el juego de nuestra página web.
              </p>
            </center>
          </div>
        </div>
        <div id="publicidad" className="row">
          <div className="team-member">
            <figure>
              <img
                id="team"
                src="LaraBN.jpg"
                onMouseOver={e => (e.currentTarget.src = "lara2.jpg")}
                onMouseOut={e => (e.currentTarget.src = "LaraBN.jpg")}
                alt="Image"
                className="rounded-circle"
              />
            </figure>
            <div className="p-3">
              <center>
                <h3>Lara Fernández</h3>
                <span className="position">
                  Estudiante de Publicidad y RRPP
                </span>
              </center>
            </div>
          </div>

          <div className="team-member">
            <figure>
              <img
                id="team"
                src="AlexandraBN.jpg"
                onMouseOver={e => (e.currentTarget.src = "alexandra2.jpg")}
                onMouseOut={e => (e.currentTarget.src = "AlexandraBN.jpg")}
                alt="Image"
                className="rounded-circle"
              />
            </figure>
            <div className="p-3">
              <center>
                <h3>Alexandra Velásquez</h3>
                <span className="position">
                  Estudiante de Publicidad y RRPP
                </span>
              </center>
            </div>
          </div>
          <div className="team-member">
            <figure>
              <img
                id="team"
                src="ines.jpg"
                onMouseOver={e => (e.currentTarget.src = "ines2.jpg")}
                onMouseOut={e => (e.currentTarget.src = "ines.jpg")}
                alt="Image"
                className="rounded-circle"
              />
            </figure>
            <div className="p-3">
              <center>
                <h3>Inés Beteta</h3>
                <span className="position">
                  Estudiante de Publicidad y RRPP
                </span>
              </center>
            </div>
          </div>
          <div className="team-member">
            <figure>
              <img
                id="team"
                src="MarBN.jpg"
                onMouseOver={e => (e.currentTarget.src = "mar2.jpg")}
                onMouseOut={e => (e.currentTarget.src = "MarBN.jpg")}
                alt="Image"
                className="rounded-circle"
              />
            </figure>
            <div className="p-3">
              <center>
                <h3>Mar Horna</h3>
                <span className="position">
                  Estudiante de Publicidad y RRPP
                </span>
              </center>
            </div>
          </div>
        </div>
        <div id="informatica" className="row">
          <div className="team-member">
            <figure>
              <img
                id="team"
                src="ElderBN.jpg"
                onMouseOver={e => (e.currentTarget.src = "elder2.jpg")}
                onMouseOut={e => (e.currentTarget.src = "ElderBN.jpg")}
                alt="Image"
                className="rounded-circle"
              />
            </figure>
            <div className="p-3">
              <center>
                <h3>Elder Bol</h3>
                <span className="position">Estudiante de Informática</span>
              </center>
            </div>
          </div>
          <div className="team-member">
            <figure>
              <img
                id="team"
                src="RodrigoBN.jpg"
                onMouseOver={e => (e.currentTarget.src = "rodrigo2.jpg")}
                onMouseOut={e => (e.currentTarget.src = "RodrigoBN.jpg")}
                alt="Image"
                className="rounded-circle"
              />
            </figure>
            <div className="p-3">
              <center>
                <h3>Rodrigo Zaldaña</h3>
                <span className="position">Estudiante de Informática</span>
              </center>
            </div>
          </div>
          <div className="team-member">
            <figure>
              <img
                id="team"
                src="KevinBN.jpg"
                onMouseOver={e => (e.currentTarget.src = "kevin2.jpg")}
                onMouseOut={e => (e.currentTarget.src = "KevinBN.jpg")}
                alt="Image"
                className="rounded-circle"
              />
            </figure>
            <div className="p-3">
              <center>
                <h3>Kevin Acuña</h3>
                <span className="position">Estudiante de Informática</span>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
