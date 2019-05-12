import React, { Component } from 'react';
import SpotifyPlayer from 'react-spotify-player';

export default class Exclusivo extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="container">
        <div className="row mb-5 mt-5 animated fadeIn slow">
          <div className="col-md-5 text-left">
            <h2 className="section-title mb-3">Contenido Exclusivo</h2>
            <hr className="divider my-4"/>
            <p className="lead">Making Off.</p>
            <div>
              <p className="lead">Lista de Reproducciones.</p>
              <SpotifyPlayer
                uri="spotify:playlist:4UGpp0J09HxYKDMhOV1HxW"
                size={{width: '100%', height: 300}}
                view="coverart"
                theme="black"
              />
            </div>
            <p className="lead">Cantantes y Grupos.</p>
          </div>
        </div>
      </div>
    );
  }
}