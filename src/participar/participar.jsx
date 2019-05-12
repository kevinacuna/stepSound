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
          <h2 className="text-center col-sm-12">
            <b>Instrucciones</b>
            <br/>
            ¡BIENVENIDO A STEP SOUND!
          </h2>
          <p className="lead">
            <br/>
            Acabas de unirte a una nueva aventura en la que descubrirás una apasionante historia llena de música 
            y lugares extraordinarios. Para ello deberás seguir los pasos que se mencionan a continuación:
          </p>
          <div class="col" id="c1">
          <div id="p1">
            <b><strong><center>Paso 1:</center></strong></b>
          </div>
          <div id="c1"> 
            <br/>
          <p className="lead">
          Dar click en la opción <strong>“Comenzar”</strong> e inmediatamente aparecerá en la pantalla el camino que 
          tendrás que recorren dividido en diez preguntas para llegar a la meta.
          </p>
          </div>
          </div>
          <div class="col" id="c2">
          <div id="p2">
            <b><strong><center>Paso 2:</center></strong></b>
            </div>
          <div id="c2"> 
            <br/>
          <p className="lead">
          Dar click en la <strong>“Pregunta 1”.</strong> En ese momento se abrirá una nueva pestaña con una pregunta general. 
          Esta pestaña incluye contenido multimedia y diferentes opciones para responder a la pregunta. 
          Si no estás seguro de la respuesta escoge la opción de pista y te dirigirá a nuestras 
          redes sociales con ayuda para responder.
          </p>
          </div>
          </div>
          <div class="col" id="c3"> 
          <div id="p3">
            <b><strong><center>Paso 3:</center></strong></b> 
            </div>
          <div id="c3"> 
            <br/>
          <p className="lead">
          Para acertar la respuesta no hay tiempo límite. Así que tomate tu tiempo. No te preocupes si te equivocas 
          siempre habrá una segunda oportunidad para poder continuar. Una vez acertada deberás de dar a la 
          opción de “siguiente” y te dirigirá a la “Pregunta 2”. 
          </p>
          <p className="lead">
          Recuerda que es un camino el que has de recorrer y sin la Pregunta 1 no podrás avanzar a la siguiente.
          </p>
          </div>
          </div>
          <div class="col" id="c4"> 
          <div id="p4">
            <b><strong><center>Paso 4:</center></strong></b> 
            </div>
          <div id="c4"> 
            <br/>
          <p className="lead">
          A medida que vayas avanzando las preguntas irán aumentando su dificultad. Por lo tanto te 
          deseamos mucha suerte y ánimo en esta aventura. 
          </p>
          <p className="lead">
          Ten en cuenta que debes estar pendiente de nuestras redes sociales, 
          ya que por medio de ellas subiremos contenido exclusivo en el cual te brindaremos pistas 
          para que puedas lograr llegar a la meta de una manera más fácil y divertida.
          </p>
          </div>
          </div>
          <p className="lead">
          No olvides echar un vistazo en la opción “contenido exclusivo” puesto que incluirá contenido interesante acerca de 
          cantantes y grupos de música que pueden servirte de inspiración.
          </p>
        </div>
      </div>
    );
  }
}
