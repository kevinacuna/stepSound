import React, { Component } from "react";

export default class Participar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center section-title mb-3">¿Cómo participar?</h2>
        <hr className="divider my-4" />
        <div className="row">
          <p className="lead">
            Para participar primeramente deberas seguirnos en nuestras redes
            sociales.
          </p>
          <p className="lead">
            subiremos contenido semanalmente para dar pistas sobre las
            preguntas.
          </p>
          <p className="lead">
            Una vez adentro deberas contestar correctamente cada una de las
            preguntas para llegar a la estrella.
          </p>
          <p className="lead">
            comparte con tus amigos esta increible aventura.
          </p>
        </div>
      </div>
    );
  }
}
