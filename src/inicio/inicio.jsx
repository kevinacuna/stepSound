import React, { Component } from 'react';
import Modal from './modal/modal';
import ModalPregunta from './modal/modalPregunta';
import '../../styles/inicio.css';
import Preguntas from '../../public/informacion/preguntas.json';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state={
        mostrarModalFlag: false,
        preguntaSeleccionadaId: 0,
        dataPregunta: {}
    };
    this.seleccionarPregunta = this.seleccionarPregunta.bind(this);
    this.cerrarModalPregunta = this.cerrarModalPregunta.bind(this);
    this.seleccionarRespuesta = this.seleccionarRespuesta.bind(this);
  }

  cerrarModalPregunta(){
      this.setState({ mostrarModalFlag : false });
  }

  seleccionarRespuesta(idOpcion) {
    const { preguntas } = Preguntas;
    const { preguntaSeleccionadaId } = this.state;
    // Obtener el detalle de la pregunta seleccionada
    const respuesta = preguntas.find(elementoPregunta => elementoPregunta.id == preguntaSeleccionadaId);
    // True si era la respuesta correcta; False si es incorrecta
    const correcta = respuesta.opciones.find( opcion => opcion.id == idOpcion).correcta;
    console.log(correcta);
  }

  seleccionarPregunta(idPregunta){
      const { preguntas } = Preguntas;
      const dataPregunta = preguntas.find( elementoPregunta => elementoPregunta.id == idPregunta);
      this.setState({ mostrarModalFlag: true, preguntaSeleccionadaId: idPregunta, dataPregunta:dataPregunta });
  }
  
  render() {
    const { preguntas } = Preguntas;
    const { mostrarModalFlag, dataPregunta } = this.state;

    const modal = mostrarModalFlag ? (
        <Modal>
                <ModalPregunta
                    seleccionarRespuesta={this.seleccionarRespuesta}
                    hideModal={this.cerrarModalPregunta}
                    data={dataPregunta}
                />
            </Modal>
    ) : null;
    return (
    <div className="container">
        <div className="row" key="0">
            <div className="col-md-12" key="0">
                <div className="main-timeline">
                    {
                        preguntas.map( ({
                            id, titulo
                        }) => (
                            <div className="timeline" key={id}>
                                <a href="#" onClick={() => this.seleccionarPregunta(id)} className="timeline-content">
                                    <span className="timeline-year">{titulo}</span>
                                    <div className="timeline-icon">
                                        <i className="fa fa-rocket"></i>
                                    </div>
                                    <div className="content"/>
                                </a>
                            </div>
                        ))
                    }
                    {modal}
                </div>
            </div>
        </div>
    </div>
    );
  }
}