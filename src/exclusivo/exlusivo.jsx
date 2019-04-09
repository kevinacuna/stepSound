import React, { Component } from 'react';

export default class Exclusivo extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-5 text-left">
            <h2 className="section-title mb-3">Conenido Exclusivo</h2>
            <p className="lead">Making Off.</p>
            <p className="lead">Lista de Reproducciones.</p>
            <p className="lead">Cantantes y Grupos.</p>
          </div>
        </div>
      </div>
    );
  }
}