import React, { Component } from "react";

export default class Participar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mt-5 animated fadeIn slow">
        <h1 className="text-center section-title mb-3">¿Cómo participar?</h1>
        <hr className="divider my-4" />
        <div className="row">
          <h2>
            <b>Instrucciones</b>
            <br/>
            ¡BIENVENIDO A STEP SOUND!
          </h2>
          <p className="lead">
            Acabas de unirte a una aventura inigualable, en la cual para lograr que Pablo llegue a la meta debes
            guiarte con las siguientes instrucciones:
          </p>
          <p className="lead">
            <b>Paso 1: </b>
            Dar click en la opción “Comenzar” e inmediatamente te aparecerá en la
            pantalla el camino que tendrás que recorren con una serie de pasos con preguntas para llegar a la meta.
          </p>
          <p className="lead">
            <b>Paso 2: </b>
            Dar click en la “Pregunta 1”, y te aparecerá la pregunta, debes de responder pregunta por pregunta
            ya que es una secuencia continua y sin la respuesta no puedes avanzar.
            Para conseguir acertarla aparecerá un video con la historia de Pablo, dos fotos y una pista en las redes sociales.
            Solo si aciertas podrás seguir avanzando en esta aventura.
          </p>
          <p className="lead">
            <b>Paso 3: </b> Una vez que entres en cada paso, no tendrás tiempo límite para responder la pregunta,
            así que no te preocupes tendrás el tiempo suficiente para poder acertar. 
            Por otro lado, si no aciertas y fallas podrás seguir intentándolo después de dar click al botón de ayuda,
            y podrás continuar hasta conseguirlo. Y después avanzar.
          </p>
          <p className="lead">
            <b>Paso 4: </b> A medida que vayas avanzando las preguntas irán aumentando su dificultad,
            por lo tanto te deseamos mucha suerte y ánimos en esta aventura. 
          </p>
          <p className="lead">
            Ten en cuenta que debes estar pendiente de nuestras redes sociales, ya que por medio de ellas subiremos
            contenido exclusivo en el cual te brindaremos pistas para que puedas lograr llegar a la meta de una manera más fácil y divertida.
          </p>
        </div>
      </div>
    );
  }
}
