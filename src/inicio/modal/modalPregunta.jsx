import React from "react";
import "../../../public/img/guitar.png";
import '../../../public/informacion/preguntasImport';

const disabled = "disabled";

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
      <div className="modal-content">
        <div className="modal-header text-center">
          <h5 className="modal-title w-100" id="exampleModal">
          {`PREGUNTA ${data.id}`}
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
              <iframe style={{ width: 420, height: 315 }} src={data.video.url} />
              <div id="contenedorAudiolibro">
                <audio src={data.audio} preload="auto" controls />
                <p>{data.video.descripcion}</p>
              </div>
              
          </div>
          
            <div id="tituloPregunta">
                <h2>
                {data.titulo}
                </h2>
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
                        respuestasHechas.bloqueada ? disabled : ''
                      } ${
                        idRespuestas.includes(id) ? disabled : ''
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
            href={data.ayuda}
            className={`btn btn-success mr-auto ${
              respuestasHechas.correcta ? disabled : ""
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
);
