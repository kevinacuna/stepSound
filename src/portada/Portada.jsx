import React, { Component } from "react";
import { Redirect } from "react-router";

export default class Portada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnClicked: false
    };
    this.btnHandler = this.btnHandler.bind(this);
  }
  btnHandler() {
    this.setState({ btnClicked: true });
  }
  render() {
    const { btnClicked } = this.state;
    if (btnClicked) {
      return <Redirect push to="/inicio" />;
    }
    return (
      <div className="masthead">
        <div
          className="site-blocks-cover overlay Img-portada"
          data-aos="fade"
          id="home-section"
        >
          <div className="container">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">
                  Step Sound
                </h1>
                <hr className="divider my-4" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">Aquí habrá una pequeña descripción de la pagina web - Aquí habrá una pequeña descripción de la pagina web - Aquí habrá una pequeña descripción de la pagina web - Aquí habrá una pequeña descripción de la pagina web- Aquí habrá una pequeña descripción de la pagina web - Aquí habrá una pequeña descripción de la pagina web- Aquí habrá una pequeña descripción de la pagina web - Aquí habrá una pequeña descripción de la pagina web - Aquí habrá una pequeña descripción de la pagina web - Aquí habrá una pequeña descripción de la pagina web -Aquí habrá una pequeña descripción de la pagina web - Aquí habrá una pequeña descripción de la pagina web Aquí habrá una pequeña descripción de la pagina web - Aquí habrá una pequeña descripción de la pagina web</p>
                <p className="text-white-75 font-weight-light mb-5">
                  ¡No pauses tus sueños!
                </p>
                <button
                  onClick={this.btnHandler}
                  className="btn btn-primary mr-2 mb-2"
                >
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
