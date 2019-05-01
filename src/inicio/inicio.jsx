import React, { Component } from 'react';
import '../../styles/inicio.css';
import Preguntas from '../../public/informacion/preguntas.json';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { preguntas } = Preguntas;
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
                                <a href="#" className="timeline-content">
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