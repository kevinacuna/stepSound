import React from 'react';

export default ({ hideModal, data, seleccionarRespuesta }) => (
  <div className="modal fade show" style={{ display: 'flex', overflow: 'scroll', maxHeight: '100%' }} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModal">{data.titulo}</h5>
          <button type="button" onClick={hideModal} className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div id="contenedorVideo">
            <iframe
              style={{ width:420, height:315 }}
              src={data.video.url}
            />
            <p>
              {data.video.descripcion}
            </p>
          </div>
          <div className="row" id="contenendorFotos">
            <div className="col-md-1 col-lg-1 mb-1"/>
            {
              data.fotos.map( ({ url, descripcion, id }) => (
                <div key={id} className="col-md-5 col-lg-5 mb-5">
                  <div className="team-member">
                    <figure style={{ maxHeight: '250px' }}>
                      <img id="team" src={url} alt="Image" className="img-fluid"/>
                    </figure>
                    <div className="p-3">
                      <span className="position">{descripcion}</span>
                    </div>
                  </div>
                </div>
              ))
            }
            <div className="col-md-1 col-lg-1 mb-1"/>
            <div id="contenendorAudio">
              <audio src={data.audio} preload="auto" controls />
            </div>
            <div id="contenedorOpciones">
              <div className="row">
                {
                  data.opciones.map( ({ descripcion, id }) => (
                    <div key={id} className="col-md-5 col-lg-5 mb-5">
                      <button onClick={() => seleccionarRespuesta(id)} type="button" key={id} className="btn btn-primary btn-lg btn-block">{descripcion}</button>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary mr-auto" data-dismiss="modal">Cerrar</button>
          <button type="button" className="btn btn-primary" onClick={hideModal}>¿Ayuda?</button>
        </div>
      </div>
    </div>
  </div>
);