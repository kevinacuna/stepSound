import React, { Component } from "react";

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
              Step Sound es una historia ficticia creada por alumnos de Publicidad y Relaciones Públicas e Ingeniería Informática de la 
              Universidad Europea del Atlántico para la asignatura de Creación de Productos Audiovisuales y Multimedia.
              </p>
              <p className="lead">
              Step Sound surge con el fin de crear un producto transmedia y para ello hemos desarrollado en nuestra página web un 
              juego interactivo en base a una historia. 
              </p>
              <p className="lead">
              Toda la información necesaria la puedes encontrar en nuestra  página web. Además, puedes seguir los avances a través 
              de nuestras redes sociales de Twitter, Instagram y Youtube, en las que también encontrarás contenido exclusivo. 
              </p>
              <p className="lead">
              No olvides contactar con nosotros en caso de cualquier duda a la hora de seguir el juego de nuestra página web. 
              Esperamos que encuentres esta aventura igual de interesante que nosotrxs y que te diviertas hasta llegar a la meta. 
              </p>
            </center>
          </div>
        </div>

        <div id="Publicidad" className="row fila">
          <div className="team-member">
            <figure>
              <img
                id="team"
                src="https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2FLaraBN.jpg?alt=media&token=2baab241-8f61-4c69-90c2-d200448e0818"
                onMouseOver={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2Flara2.jpg?alt=media&token=489d750a-1b39-4665-8e64-416a170abe08")}
                onMouseOut={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2FLaraBN.jpg?alt=media&token=2baab241-8f61-4c69-90c2-d200448e0818")}
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
                src="https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2FAlexandraBN.jpg?alt=media&token=a18caaaf-6453-4406-8908-bbd91ed95a68"
                onMouseOver={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2Falexandra2.jpg?alt=media&token=aa86653e-712f-4f74-a3c2-53b69a07f387")}
                onMouseOut={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2FAlexandraBN.jpg?alt=media&token=a18caaaf-6453-4406-8908-bbd91ed95a68")}
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
                src="https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2FInesBN.jpg?alt=media&token=3a109bef-bc91-435b-acb7-0a6470131390"
                onMouseOver={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2Fines2.jpg?alt=media&token=252e50f8-4725-4b06-ac5d-5eab45801845")}
                onMouseOut={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2FInesBN.jpg?alt=media&token=3a109bef-bc91-435b-acb7-0a6470131390")}
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
                src="https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2FMarBN.jpg?alt=media&token=1d1cf4fe-5ff1-4423-a428-b35abbd9fd9e"
                onMouseOver={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2Fmar2.jpg?alt=media&token=e7d63595-f007-43aa-b452-3fbc730e0601")}
                onMouseOut={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2FMarBN.jpg?alt=media&token=1d1cf4fe-5ff1-4423-a428-b35abbd9fd9e")}
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
        <div id="informatica" className="row fila">
          <div className="team-member">
            <figure>
              <img
                id="team"
                src="https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2FElderBN.jpg?alt=media&token=29631025-bf27-45c8-90e6-9bc0f2b8de39"
                onMouseOver={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2Felder2.jpg?alt=media&token=7c433b3d-6381-4d3b-aefd-dc6adbb7273e")}
                onMouseOut={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2FElderBN.jpg?alt=media&token=29631025-bf27-45c8-90e6-9bc0f2b8de39")}
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
                src="https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2FRodrigoBN.jpg?alt=media&token=700d7646-e77f-4f50-9e81-3965862f660c"
                onMouseOver={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2Frodrigo2.jpg?alt=media&token=b9a7b31c-7d70-4a12-a7fe-1d81604bca38")}
                onMouseOut={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2FRodrigoBN.jpg?alt=media&token=700d7646-e77f-4f50-9e81-3965862f660c")}
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
                src="https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2FInesBN.jpg?alt=media&token=3a109bef-bc91-435b-acb7-0a6470131390"
                onMouseOver={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2Fkevin2.jpg?alt=media&token=06b7248e-c77a-4075-af6d-a6d27ca532dd")}
                onMouseOut={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/stepsound-23449.appspot.com/o/repositorio%2Fimg%2Fequipo%2FInesBN.jpg?alt=media&token=3a109bef-bc91-435b-acb7-0a6470131390")}
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
