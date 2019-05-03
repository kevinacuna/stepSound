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
        dataPregunta: {},
        historialPreguntasRespondidas: []
    };
    this.seleccionarPregunta = this.seleccionarPregunta.bind(this);
    this.cerrarModalPregunta = this.cerrarModalPregunta.bind(this);
    this.seleccionarRespuesta = this.seleccionarRespuesta.bind(this);
  }

  /*
    Funcion que se encarga de obtener la data de la pregunta 
    que se mostrará en el modal
    SetState{
        mostrarModalFlag: True = mostrar el modal,
        preguntaSeleccionadaId: id de la pregunta seleccionada,
        dataPregunta: data que se mostrará en el modal
    }
  */
    seleccionarPregunta(idPregunta) {
        const { preguntas } = Preguntas;
        const dataPregunta = preguntas.find( elementoPregunta => elementoPregunta.id == idPregunta);
        this.setState({ mostrarModalFlag: true, preguntaSeleccionadaId: idPregunta, dataPregunta:dataPregunta });
    }

    
  seleccionarRespuesta(idOpcion) {
    const { dataPregunta } = this.state;

    // objeto pregunta seleccionada
    const opcionSeleccionada = dataPregunta.opciones.find( opcion => opcion.id == idOpcion);

    this.agregarRespuesta(opcionSeleccionada);
  }

    /*
    agrega una respuesta al historial 
  */
    agregarRespuesta(respuestaObjeto) {
        const { preguntaSeleccionadaId } = this.state;
        const preguntaDetalle = this.buscarPreguntasRespondidas(preguntaSeleccionadaId);
        if ( preguntaDetalle == -1) {
            const nuevaRespuesta = {
                idPregunta: preguntaSeleccionadaId,
                idRespuestas: [respuestaObjeto.id]
            };
            this.setState(prevState => ({
                historialPreguntasRespondidas: [...prevState.historialPreguntasRespondidas, nuevaRespuesta],
            }));
        } else {
            // Es necesario el setState para que se vuelva a renderizar el componente
            this.setState(prevState => {
                // Creamos una varibale que sea la referencia al historial de preguntas respondidas
                const newHistorialPreguntasRespondidas = prevState.historialPreguntasRespondidas;
                // Obtenes solo el historial de la pregunta seleccionada
                const preguntaHistorial = newHistorialPreguntasRespondidas.find( respuesta => respuesta.idPregunta == preguntaSeleccionadaId);
                // Si la opcion no ha sido usada se le agrega al listado de respuestas dadas
                if (!preguntaHistorial.idRespuestas.includes(respuestaObjeto.id)) preguntaHistorial.idRespuestas.push(respuestaObjeto.id);
                // Regresamos el nuevo historial de preguntas respondidas
                return({ historialPreguntasRespondidas: newHistorialPreguntasRespondidas });
            });
        }
    }

  /*
    id: identificador de la pregunta
    Busca si la pregunta ha sido respondida
    -1 Si no existe en el historial
    Detalle de la pregunta
        {
            idPregunta: id de la pregunta,
            idRespuestas: Array de id de respuestas hechas por el usuario,
            correcta: si la respuesta es correcta o no
        }
  */
  buscarPreguntasRespondidas(idPregunta){
    const { historialPreguntasRespondidas } = this.state;
    const resultado = historialPreguntasRespondidas.find(pregunta => pregunta.idPregunta == idPregunta);
    return resultado == undefined ? -1 : resultado;
  }

  // Cambiar estado para cerrar modal
  cerrarModalPregunta() {
    this.setState({ mostrarModalFlag : false });
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
                    disabled=""
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