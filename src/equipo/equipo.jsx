import React, { Component } from 'react';
import '../../public/img/hero_2.jpg';

export default class Equipo extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-5 text-left">
            <h2 className="section-title mb-3">Nuestro <br/> Equipo</h2>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
          </div>
        </div>
        <div className="row">
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="team-member">
              <figure>
                <img src="hero_2.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Kaiara Spencer</h3>
                <span class="position">Product Manager</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="team-member">
              <figure>
                <img src="hero_2.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Kaiara Spencer</h3>
                <span class="position">Product Manager</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="team-member">
              <figure>
                <img src="hero_2.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Kaiara Spencer</h3>
                <span class="position">Product Manager</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="team-member">
              <figure>
                <img src="hero_2.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Kaiara Spencer</h3>
                <span class="position">Product Manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}