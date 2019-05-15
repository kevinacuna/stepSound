import React, { Component } from 'react';
import Modal from './modal/modal';
import ModalPregunta from './modal/modalPregunta';
import ModalNoDisponible from './modal/modalNoDisponible';
import '../../styles/inicio.css';
import Preguntas from '../../public/informacion/preguntas.json';
import '../../public/audios/audiosImport.jsx';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state={
        mostrarModalPreguntaFlag: false,
        mostrarModalNoDisponibleFlag: false,
        preguntaSeleccionadaId: 0,
        dataPregunta: {},
        historialPreguntasRespondidas: [],
        posicionTablero: 0,
        audio: null
    };
    this.seleccionarPregunta = this.seleccionarPregunta.bind(this);
    this.cerrarModal = this.cerrarModal.bind(this);
    this.seleccionarRespuesta = this.seleccionarRespuesta.bind(this);
    this.getEstadoPublicacion = this.getEstadoPublicacion.bind(this);
    this.ayudaBtnClick = this.ayudaBtnClick.bind(this);
    this.esCorrecta = this.esCorrecta.bind(this);
    this.playSong = this.playSong.bind(this);
    this.stopSong = this.stopSong.bind(this);
  }

  componentDidMount() {
    try {
        const historialPreguntasRespondidas = JSON.parse(localStorage.getItem('historialPreguntasRespondidas'));
        if (historialPreguntasRespondidas != null) {
          let posicionTablero = 0;
          if (!(historialPreguntasRespondidas.length == 0 || undefined)) {
            if (historialPreguntasRespondidas[historialPreguntasRespondidas.length - 1].correcta) {
              posicionTablero = historialPreguntasRespondidas.length;
              if (historialPreguntasRespondidas[historialPreguntasRespondidas.length - 1].correcta && historialPreguntasRespondidas.length == 10) {
                const { showExclusivo } = this.props;
                showExclusivo();
              }
            } else {
              posicionTablero = historialPreguntasRespondidas.length -1;
            }
          }
          this.setState({
            historialPreguntasRespondidas,
            posicionTablero
          });
        }
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

        this.setState({ [this.getEstadoPublicacion(idPregunta) == true ? 'mostrarModalPreguntaFlag' : 'mostrarModalNoDisponibleFlag']: true, preguntaSeleccionadaId: idPregunta, dataPregunta });
    }

    
  seleccionarRespuesta(idOpcion) {
    const { dataPregunta, posicionTablero } = this.state;

    // objeto pregunta seleccionada
    const opcionSeleccionada = dataPregunta.opciones.find( opcion => opcion.id == idOpcion);

    this.agregarRespuesta(opcionSeleccionada);
    const esCorrecta = this.esCorrecta(idOpcion, 'estado');
    if (esCorrecta) {
      this.setState( prevStates => ({posicionTablero: prevStates.posicionTablero+1}));
      if (posicionTablero === 9) {
        const { showExclusivo } = this.props;
        showExclusivo();
      }
    }
  }

    agregarRespuesta(respuestaObjeto) {
        const { preguntaSeleccionadaId, dataPregunta } = this.state;
        const preguntaDetalle = this.buscarPreguntasRespondidas();
        const { correcta } = dataPregunta.opciones.find(opcion => opcion.id == respuestaObjeto.id);

        if ( preguntaDetalle == -1) {
            const nuevaRespuesta = {
                idPregunta: preguntaSeleccionadaId,
                idRespuestas: [respuestaObjeto.id],
                bloqueada: true,
                correcta
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
                // Bloqueamos la pregunta para que los botones se deshabiliten
                preguntaHistorial.bloqueada = true;
                // seteamos sobre si la respuesta que se decidio es la correcta
                preguntaHistorial.correcta = correcta;
                // Si la opcion no ha sido usada se le agrega al listado de respuestas dadas
                if (!preguntaHistorial.idRespuestas.includes(respuestaObjeto.id)) preguntaHistorial.idRespuestas.push(respuestaObjeto.id);
                // Regresamos el nuevo historial de preguntas respondidas
                return({
                    historialPreguntasRespondidas: newHistorialPreguntasRespondidas,
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
  buscarPreguntasRespondidas(){
    const { historialPreguntasRespondidas, preguntaSeleccionadaId } = this.state;
    const resultado = historialPreguntasRespondidas.find(pregunta => pregunta.idPregunta == preguntaSeleccionadaId);
    return resultado == undefined ? -1 : resultado;
  }

  /*
    Obtener el estado de la pregunta
    True, pregunta lista para publicarse, fecha menor al día de hoy
    False, pregunta bloqueada, fecha mayor al día de publicacion
  */
  getEstadoPublicacion(idPregunta) {
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

  ayudaBtnClick() {
    const { preguntaSeleccionadaId } = this.state;
    const pregunta = this.buscarPreguntasRespondidas();
    
    if(pregunta != -1) {
      // Es necesario el setState para que se vuelva a renderizar el componente
      this.setState(prevState => {
        // Creamos una varibale que sea la referencia al historial de preguntas respondidas
        const newHistorialPreguntasRespondidas = prevState.historialPreguntasRespondidas;
        // Obtenes solo el historial de la pregunta seleccionada
        const preguntaHistorial = newHistorialPreguntasRespondidas.find( respuesta => respuesta.idPregunta == preguntaSeleccionadaId);
        // Bloqueamos la pregunta para que los botones se deshabiliten
        preguntaHistorial.bloqueada = false;
        // Regresamos el nuevo historial de preguntas respondidas
        return({
            historialPreguntasRespondidas: newHistorialPreguntasRespondidas,
        });
    });
    };

  }

  playSong(srcSong) {
    const audio = new Audio(srcSong);
    this.setState({audio});
    audio.play();
  }

  stopSong() {
    const { audio } = this.state;
    audio.pause();
    audio.currentTime = 0;
  }

  // Cambiar estado para cerrar modal
  cerrarModal(event) {
    const nombreModal = event.target.id;
    this.setState({ [nombreModal] : false });
  }

  /*
    Funcion que identifica si la pregunta es correcta o no; solo sirve para 
    colocar estilo en modalPregunta
  */
  esCorrecta(id, tipo='estilo') {
    const { dataPregunta } = this.state;
    const esCorrecta = dataPregunta.opciones.find(opcion => opcion.id == id).correcta;
    const historialPreguntas = this.buscarPreguntasRespondidas().idRespuestas||[];
    switch (tipo) {
      case 'estilo':
        if (historialPreguntas.includes(id) && esCorrecta) {
          return 'btn-pregunta-correcta';
        } else if (historialPreguntas.includes(id) && !esCorrecta) {
          return 'btn-pregunta-incorrecta';
        }
        return '';
      case 'estado' :
        return esCorrecta;
      default :
        return esCorrecta;
    }
    
  }

  
  render() {
    const { preguntas } = Preguntas;
    const { mostrarModalPreguntaFlag, dataPregunta, mostrarModalNoDisponibleFlag, posicionTablero } = this.state;

    const modalPregunta = mostrarModalPreguntaFlag ? (
      <Modal>
          <ModalPregunta
              seleccionarRespuesta={this.seleccionarRespuesta}
              hideModal={this.cerrarModal}
              data={dataPregunta}
              respuestasHechas={this.buscarPreguntasRespondidas()}
              idRespuestas={this.buscarPreguntasRespondidas().idRespuestas||[]}
              ayudaClick={this.ayudaBtnClick}
              esCorrecta={this.esCorrecta}
              playSong={this.playSong}
              stopSong={this.stopSong}
          />
      </Modal>
    ) : null;
    const modalNoDisponible = mostrarModalNoDisponibleFlag ? (
      <Modal>
          <ModalNoDisponible
            id={dataPregunta.id}
            fecha={dataPregunta.fechaPublicacion}
            hideModal={this.cerrarModal}
          />
      </Modal>
  ) : null;
    return (
    <div className="container">
        <div className="row align-items-center justify-content-center text-center mt-5" key="0">
            <div className="col-md-8" key="0">
                <div className="main-timeline animated slideInDown slow">
                    {
                      preguntas.map( ({ id }, index) => (
                          <div className={"timeline " + (index > posicionTablero ? 'desabilitado' : '') } key={id}>
                              <button onClick={() => this.seleccionarPregunta(id)}
                                disabled={index > posicionTablero ? true : false}
                                className="timeline-content btn-hide "
                              >
                                  <span className="timeline-year">{`Lugar ${id}`}</span>
                                  <div className="content"/>
                              </button>
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