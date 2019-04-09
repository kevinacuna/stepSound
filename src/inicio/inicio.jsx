import React, { Component } from 'react';
import '../../styles/inicio.css';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main-timeline">
                    <div class="timeline">
                        <a href="#" class="timeline-content">
                            <span class="timeline-year">Pregunta 1</span>
                            <div class="timeline-icon">
                                <i class="fa fa-rocket"></i>
                            </div>
                            <div class="content">
                                <p class="description">
                    
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="timeline">
                        <a href="#" class="timeline-content">
                            <span class="timeline-year">pregunta 2</span>
                            <div class="timeline-icon">
                                <i class="fa fa-users"></i>
                            </div>
                            <div class="content">
                                <h3 class="title">avanza</h3>
                                <p class="description">
                                    
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}