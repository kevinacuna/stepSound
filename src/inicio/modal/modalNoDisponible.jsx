import React from 'react';

export default ({ id, hideModal, fecha }) => (
  <div className="modal fade show animated slideInLeft" style={{ display: 'flex', overflow: 'scroll', maxHeight: '100%' }}  tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{`Pregunta ${id} no disponible aún`}</h5>
          <button type="button" className="close" id="mostrarModalNoDisponibleFlag" onClick={hideModal} data-dismiss="modal" aria-label="Close">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>{`La pregunta estará disponible para el día ${fecha}.`}</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" id="mostrarModalNoDisponibleFlag" onClick={hideModal} data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
);