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
    };
    this.seleccionarPregunta = this.seleccionarPregunta.bind(this);
    this.cerrarModalPregunta = this.cerrarModalPregunta.bind(this);
  }

  cerrarModalPregunta(){
      this.setState({ mostrarModalFlag : false });
  }

  seleccionarPregunta(){
      this.setState({ mostrarModalFlag: true });
  }
  
  render() {
    const { preguntas } = Preguntas;
    const { mostrarModalFlag } = this.state;
    if ( mostrarModalFlag ) {
        return (
            <Modal>
                <ModalPregunta
                    hideModal={this.cerrarModalPregunta}
                />
            </Modal>
        );
    }
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
                                <a href={`#${id}`} onClick={this.seleccionarPregunta} className="timeline-content">
                                    <span className="timeline-year">{titulo}</span>
                                    <div className="timeline-icon">
                                        <i className="fa fa-rocket"></i>
                                    </div>
                                    <div className="content">
                                        <p className="description">
                                            sdf
                                        </p>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    );
  }
}