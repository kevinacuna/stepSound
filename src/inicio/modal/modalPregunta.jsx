import React from "react";
import "../../../public/img/guitar.png";

const disabled = "disabled";

export default ({
  hideModal,
  data,
  seleccionarRespuesta,
  respuestasHechas,
  ayudaClick,
  idRespuestas,
  esCorrecta
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
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header text-center">
          <h5 className="modal-title w-100" id="exampleModal">
            {`Lugar ${
            data.id
          }`}</h5>
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
            <center>
              <iframe style={{ width: 420, height: 315 }} src={data.video.url} />
              <p>{data.video.descripcion}</p>
            </center>
          </div>
          <div className="row" id="contenendorFotos">
            {data.fotos.map(({ url, descripcion, id }) => (
              <div key={id} className="col-md-5 col-lg-5 mb-5">
                <div className="team-member">
                  <figure style={{ maxHeight: "250px" }}>
                    <img
                      id="team"
                      src={url}
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                  <div className="p-3">
                    <span className="position">{descripcion}</span>
                  </div>
                </div>
              </div>
            ))}
            <div id="contenendorAudio">
              <audio src={data.audio} preload="auto" controls />
            </div>
            <div id="contenedorOpciones">
              <center>
                <p>
                  <b>{data.titulo}</b>
                </p>
              </center>
              <div className="row">
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
        </div>
        <div className="modal-footer">
          <a
            type="button"
            target="_blank"
            rel="noopener noreferrer"
            href={data.ayuda}
            className={`btn btn-primary mr-auto ${
              respuestasHechas.correcta ? disabled : ""
            }`}
            onClick={ayudaClick}
          >
            Pistas
          </a>
          <a
            type="button"
            id="mostrarModalPreguntaFlag"
            className="btn btn-primary"
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
