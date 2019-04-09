import React, { Component } from 'react';

export default class Participar extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-5 text-left">
            <h2 className="section-title mb-3">¿Como Participar?</h2>
            <p className="lead">Para participar primeramente deberas seguirnos en nuestras redes sociales.</p>
            <p className="lead">subiremos contenido semanalmente para dar pistas sobre las preguntas.</p>
            <p className="lead">Una vez adentro deberas contestar correctamente cada una de las preguntas para llegar a la estrella.</p>
            <p className="lead">comparte con tus amigos esta increible aventura.</p>
          </div>
        </div>
      </div>
    );
  }
}