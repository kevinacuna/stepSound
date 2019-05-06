import React, { Component } from 'react';
import Modal from './modal/modal';
import ModalPregunta from './modal/modalPregunta';
import ModalNoDisponible from './modal/modalNoDisponible';
import '../../styles/inicio.css';
import Preguntas from '../../public/informacion/preguntas.json';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state={
        mostrarModalPreguntaFlag: false,
        mostrarModalNoDisponibleFlag: false,
        preguntaSeleccionadaId: 0,
        dataPregunta: {},
        respuestasSeleccionadas: [],
        historialPreguntasRespondidas: []
    };
    this.seleccionarPregunta = this.seleccionarPregunta.bind(this);
    this.cerrarModalPregunta = this.cerrarModalPregunta.bind(this);
    this.seleccionarRespuesta = this.seleccionarRespuesta.bind(this);
    this.getListaRespuetas = this.getListaRespuetas.bind(this);
    this.getEstadoPregunta = this.getEstadoPregunta.bind(this);
  }

  componentDidMount() {
    try {
        const historialPreguntasRespondidas = JSON.parse(localStorage.getItem('historialPreguntasRespondidas'));
        if (historialPreguntasRespondidas != null) this.setState({historialPreguntasRespondidas});
    } catch (error) {
        console.error(error, " error al montar la iformacion desde localStorage");
    }
  }

  // Cada que se desmonte el descomponente se almacena en el local Storage
  componentWillUnmount() {
    this.setHistorialLocalStorage();
  }

  setHistorialLocalStorage() {
    const { historialPreguntasRespondidas } = this.state;
    localStorage.setItem('historialPreguntasRespondidas', JSON.stringify(historialPreguntasRespondidas));
  }
  

  /*
    Funcion que se encarga de obtener la data de la pregunta 
    que se mostrará en el modal
    SetState{
        mostrarModalPreguntaFlag: True = mostrar el modal,
        preguntaSeleccionadaId: id de la pregunta seleccionada,
        dataPregunta: data que se mostrará en el modal
    }
  */
    seleccionarPregunta(idPregunta) {
        const { preguntas } = Preguntas;
        const dataPregunta = preguntas.find( elementoPregunta => elementoPregunta.id == idPregunta);
        this.setState({ mostrarModalPreguntaFlag: true, preguntaSeleccionadaId: idPregunta, dataPregunta:dataPregunta });
    }

    
  seleccionarRespuesta(idOpcion) {
    const { dataPregunta } = this.state;

    // objeto pregunta seleccionada
    const opcionSeleccionada = dataPregunta.opciones.find( opcion => opcion.id == idOpcion);

    this.agregarRespuesta(opcionSeleccionada);
  }

    /*
    agrega una respuesta al historial 
    TODO: respuestasSeleccionadas deben mandarse al modal de pregunta para
    desabilitar estas opciones, se prentende guardarlas en un estado local
    ver, opcion para desmontarla cada que se cierra el modal pero obtenerla cuando se abre
  */
    agregarRespuesta(respuestaObjeto) {
        const { preguntaSeleccionadaId } = this.state;
        const preguntaDetalle = this.buscarPreguntasRespondidas(preguntaSeleccionadaId);
        if ( preguntaDetalle == -1) {
            const nuevaRespuesta = {
                idPregunta: preguntaSeleccionadaId,
                idRespuestas: [respuestaObjeto.id],
                bloqueada: true
            };
            this.setState(prevState => ({
                historialPreguntasRespondidas: [...prevState.historialPreguntasRespondidas, nuevaRespuesta],
                respuestasSeleccionadas: [respuestaObjeto.id]
            }));
        } else {
            // Es necesario el setState para que se vuelva a renderizar el componente
            this.setState(prevState => {
                // Creamos una varibale que sea la referencia al historial de preguntas respondidas
                const newHistorialPreguntasRespondidas = prevState.historialPreguntasRespondidas;
                // Obtenes solo el historial de la pregunta seleccionada
                const preguntaHistorial = newHistorialPreguntasRespondidas.find( respuesta => respuesta.idPregunta == preguntaSeleccionadaId);
                // Bloqueamos la pregunta para que los botones se deshabiliten
                preguntaHistorial.bloqueada = true;
                // Si la opcion no ha sido usada se le agrega al listado de respuestas dadas
                if (!preguntaHistorial.idRespuestas.includes(respuestaObjeto.id)) preguntaHistorial.idRespuestas.push(respuestaObjeto.id);
                // Regresamos el nuevo historial de preguntas respondidas
                return({
                    historialPreguntasRespondidas: newHistorialPreguntasRespondidas,
                    respuestasSeleccionadas: [...prevState.respuestasSeleccionadas, respuestaObjeto.id]
                });
            });
        }
        this.setHistorialLocalStorage();
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

  getListaRespuetas() {
    const { preguntaSeleccionadaId } = this.state;
    const { idRespuestas } = this.buscarPreguntasRespondidas(preguntaSeleccionadaId);
    return idRespuestas == undefined ? [] : idRespuestas;
  }

  // True, pregunta bloqueada porque ya ha respondido y no tiene otra oportunidad
  // False, pregunta desbloqueada por ser el primer intento o por otra oportunidad
  getEstadoPregunta(){
    const { preguntaSeleccionadaId } = this.state;
    const { bloqueada } = this.buscarPreguntasRespondidas(preguntaSeleccionadaId);
    return bloqueada == undefined ? false : bloqueada;
  }

  /*
    Obtener el estado de la pregunta
    True, pregunta lista para publicarse, fecha menor al día de hoy
    False, pregunta bloqueada, fecha mayor al día de publicacion
  */
  getEstadoPregunta(idPregunta) {
    const { preguntas } = Preguntas;
    const elementoPregunta = preguntas.find( elemento => elemento.id == idPregunta);
    const { fechaPublicacion } = elementoPregunta;
    /*
      elemento[0] día
      elemento[1] mes
      elemento[2] año
    */
    const elementos = fechaPublicacion.split('/');
    const fechaFormato = new Date(elementos[2], elementos[1]-1, elementos[0]);
    const fechaActual = new Date();
    return fechaFormato <= fechaActual;
  }

  // Cambiar estado para cerrar modal
  cerrarModalPregunta(event) {
    const nombreModal = event.target.id;
    this.setState({ [nombreModal] : false });
  }

  
  render() {
    const { preguntas } = Preguntas;
    const { mostrarModalPreguntaFlag, dataPregunta, mostrarModalNoDisponibleFlag } = this.state;

    const modalPregunta = mostrarModalPreguntaFlag ? (
        <Modal>
                <ModalPregunta
                    seleccionarRespuesta={this.seleccionarRespuesta}
                    hideModal={this.cerrarModalPregunta}
                    data={dataPregunta}
                    respuestasHechas={this.getListaRespuetas()}
                />
            </Modal>
    ) : null;

    const modalNoDisponible = mostrarModalNoDisponibleFlag ? (
      <Modal>
          <ModalNoDisponible
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
                                <a href="#" onClick={this.getEstadoPregunta(id) == true ? () => this.seleccionarPregunta(id) : () => this.setState({mostrarModalNoDisponibleFlag: true})} className={`timeline-content ${this.getEstadoPregunta(id) == true ? '' : 'disabled'}`}>
                                    <span className="timeline-year">{titulo}</span>
                                    <div className="timeline-icon">
                                        <i className="fa fa-rocket"></i>
                                    </div>
                                    <div className="content"/>
                                </a>
                            </div>
                        ))
                    }
                    {modalPregunta}
                    {modalNoDisponible}
                </div>
            </div>
        </div>
    </div>
    );
  }
}