import React, { Component } from "react";
import { Redirect } from "react-router";
import '../../public/informacion/introduccion/Intro.mp4';
import '../../public/img/portada.jpg';

export default class Portada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnClicked: false,
    };
    this.btnHandler = this.btnHandler.bind(this);
  }
  btnHandler() {
    this.setState({ btnClicked: true });
  }
  render() {
    const { btnClicked } = this.state;
    if (btnClicked) {
      return <Redirect push from="/" to="/comenzar" />;
    }
    return (
        <div
          className="overlay base-portada"
          data-aos="fade"
          id="home-section">
          <div className="container">
          <img src="portada.jpg" className="img-fluid" alt="Responsive image"/>
            <div className="row h-100 align-items-center justify-content-center text-center animated fadeIn slow">
            <div className="col-lg-12 align-self-end">
                    <h1 style={{ paddingTop: '50px' }} className="text-uppercase blue-grey-text text-darken-4 font-weight-bold">
                      Step Sound
                    </h1>
                    <hr className="divider my-3" />
                  </div>
            <div className="col-lg-12">
              <video class="responsive-video" style={{ maxWidth: '75%' }} controls>
                <source src="Intro.mp4" type="video/mp4"/>
              </video>
            </div>
                <div className="row h-100 align-items-center justify-content-center">
                  <div className="col-lg-12 align-self-end">
                     <p className="font-weight-light blue-grey-text text-center text-darken-3 mt-4">
                      La historia comienza cuando el abuelo recuerda que tenía que dejar un libro a su nieto.
                      <br/>
                      Resulta que en ese libro había una foto donde aparece el abuelo en un misterioso lugar
                      cuando era jóven, concretamente su lugar favorito.
                      </p>
                      <p className="font-weight-light blue-grey-text text-center text-darken-3 mt-4">
                        A modo de sorpresa, el nieto pone en marcha una aventura para encontrar el lugar
                        y poder fotografiarse allí, como un día lo hizo su abuelo.
                        <br/>
                        Desde el momento que emprende la búsqueda lo hace acompañado de sus cascos...
                      </p>
                  </div>
                   <div className="col-lg-12 align-self-baseline">
                      <p className="blue-grey-text text-darken-3 font-weight-light mb-3">
                        <h2>¡No pauses tus sueños!</h2>
                      </p>
                      <button
                        onClick={this.btnHandler}
                        className="btn btn-primary mr-2 mb-2">
                        Empezar el viaje
                      </button>
                    </div>
                </div>               
              </div>
            </div>
          </div>
    );
  }
}
