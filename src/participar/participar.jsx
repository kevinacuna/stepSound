import React, { Component } from "react";
import { Redirect } from "react-router";

export default class Participar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnClicked: false,
    };
    this.btnHandler = this.btnHandler.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  btnHandler() {
    this.setState({ btnClicked: true });
  }

  render() {
    const { btnClicked } = this.state;
    if (btnClicked) {
      return <Redirect push from="/participar" to="/comenzar" />;
    }
    return (
      <div className="container mt-5 animated fadeIn slow">
        <h1 className="text-center section-title mb-3">¿Cómo participar?</h1>
        <hr className="divider my-4" />
        <div className="row">
          <h2 className="text-center col-sm-12">
            ¡BIENVENIDO A STEP SOUND!
          </h2>
          <center>
            <p className="lead">
              <br />
              Acabas de unirte a una nueva aventura llena de música y lugares extraordinarios. 
              Para descubrir la historia de Pablo deberás seguir los pasos que se mencionan a continuación:
            </p>
          </center>
          <div className="col" id="c4">
            <div id="p4">
              <center>
                <b>
                  <strong>Paso 1:</strong>
                </b>
              </center>
            </div>
            <div id="c4">
              <br />
              <p className="lead">
                En la pantalla de Inicio visualiza el video introductorio y haz click en “Empezar el viaje”.
                A continuación, aparecerán en la pantalla estas instrucciones para saber cómo participar. Una vez leídas,
                haz click en “Comenzar”. Te llevará directamente al juego. Se trata de un camino con diez preguntas que
                has de recorrer para llegar a la meta.
              </p>
            </div>
          </div>
          <div className="col" id="c4">
            <div id="p4">
              <center>
                <b>
                  <strong>Paso 2:</strong>
                </b>
              </center>
            </div>
            <div id="c4">
              <br />
              <p className="lead">
                Haz click en el <strong>“Capítulo 1”</strong>. Al momento se abrirá una nueva pestaña con una pregunta y varias opciones de respuesta.
                Esta pestaña incluye contenido multimedia para introducirte de lleno en la historia. Además, si no estás seguro o
                desconoces cuál es la respuesta correcta, puedes escoger la opción de “Pistas” que te dirigirá a nuestras redes sociales para
                encontrar ayuda.
              </p>
            </div>
          </div>
          <div className="col" id="c4">
            <div id="p4">
              <center>
                <b>
                  <strong>Paso 3:</strong>
                </b>
              </center>
            </div>
            <div id="c4">
              <br />
              <p className="lead">
                Una vez acertada la primera pregunta, ciérrala. Automáticamente se desbloqueará el “Capítulo 2” con el mismo procedimiento que el primero.
                Recuerda que es un camino que has de recorrer sin saltarte ningún capítulo, por lo que es necesario responder correctamente a las preguntas
                para poder desbloquear las siguientes e ir avanzando. Estas preguntas se volverán más difíciles cuanto más cerca te encuentres de la meta.
              </p>
            </div>
          </div>
          <center>
            <p className="lead">
              No te preocupes, no hay tiempo límite para acertar la respuesta. Tómate tu tiempo y visita nuestras redes sociales
              para obtener más información acerca de la historia. Tampoco importa si te equivocas. Tienes más oportunidades haciendo
              click de nuevo en “Pistas”.
            </p>
            <p className="lead">
              Tampoco olvides echar un vistazo al “Contenido exclusivo”, ya que incluye información interesante acerca de los cantantes
              y grupos del momento para hacer esta aventura aún más divertida.
            </p>
            <p className="lead">
              Cualquier duda puedes escribirnos a nuestra dirección de correo o preguntarnos por las redes sociales. 
            </p>
            <p className="lead">
              ¡MUCHA SUERTE STEPSOUNDER!
            </p>
          <button
            onClick={this.btnHandler}
            className="btn mr-2 mb-2" id="redirec">
            Comenzar
          </button>
          </center>
        </div>
      </div>
    );
  }
}
