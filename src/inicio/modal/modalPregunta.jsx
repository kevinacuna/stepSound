import React from "react";
import "../../../public/img/guitar.png";
import '../../../public/informacion/preguntasImport';

export default ({
  hideModal,
  data,
  seleccionarRespuesta,
  respuestasHechas,
  ayudaClick,
  idRespuestas,
  esCorrecta,
}) => (
  <div
    className="modal fade show animated slideInLeft"
    style={{ display: "flex", overflow: "scroll", maxHeight: "100%" }}
    id="exampleModalCenter"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLongTitle"
    aria-hidden="true"
  >
    <div id="modalPreguntaContenedor" className="modal-dialog modal-lg" role="document">
      <div id="modalContenido" className="modal-content">
        <div id="preguntaElemento">
        <div className="modal-header text-center">
          <h5 className="modal-title w-100" id="exampleModal">
          {`CAPÍTULO ${data.id}`}
          </h5>
          <button
            type="button"
            onClick={hideModal}
            id="mostrarModalPreguntaFlag"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div id="contenedorVideo">
              <iframe id="video" src={data.video.url} />
          </div>
          <div id="contenedorAudio">
                <audio src={data.audio} style={{width: '420px'}} preload="auto" controls />
              </div>
            <div id="tituloPregunta">
              <center>
                <h2>
                {data.titulo}
                </h2>
              </center>
            </div>
            <div className="contenendorAudio">
              <audio src={data.cancion} style={{width: '420px'}} preload="auto" controls />
            </div>
            <div id="contenedorOpcionesGeneral">
              <div className="row" id="contenedorOpciones">
                {data.opciones.map(({ descripcion, id }) => (
                  <div key={id} className="col-md-5 col-lg-5 mb-5">
                    <button
                      onClick={() => seleccionarRespuesta(id)}
                      type="button"
                      key={id}
                      className={`btn btn-primary btn-lg btn-block ${
                        respuestasHechas.bloqueada ? "disabled" : ''
                      } ${
                        idRespuestas.includes(id) ? "disabled" : ''
                      } ${esCorrecta(id)}`}
                    >
                      {descripcion}
                    </button>
                  </div>
                ))}
              </div>
            </div>
        </div>
        <div className="modal-footer">
          <a
            type="button"
            target="_blank"
            rel="noopener noreferrer"
            href={data.ayuda[0]}
            className={`btn btn-success mr-auto ${
              respuestasHechas.correcta ? "disabled" : ""
            }`}
            onClick={ayudaClick}
          >
            Pistas
          </a>
          <a
            type="button"
            id="mostrarModalPreguntaFlag"
            className="btn btn-danger"
            style={{color:'black'}}
            onClick={hideModal}
            data-dismiss="modal"
          >
            Cerrar
          </a>
        </div>
        </div>
      </div>
      </div>
    </div>
);
