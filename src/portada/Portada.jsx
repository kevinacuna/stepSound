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
          className="site-blocks-cover overlay base-portada"
          data-aos="fade"
          id="home-section"
        >
          <div className="container">
            <div className="row h-100 align-items-center justify-content-center text-center img-portada">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase blue-grey-text text-darken-4 font-weight-bold">
                  Step Sound
                </h1>
                <hr className="divider my-4" />
              </div>

              <div className="col-lg-6 justify-content-center text-center">
                <p className="font-weight-light mb-5 blue-grey-text text-darken-3 text-shadow">

                Aquí habrá una pequeña descripción de la pagina web - Aquí habrá una pequeña descripción de la pagina web - 
                Aquí habrá una pequeña descripción de la pagina web - Aquí habrá una pequeña descripción de la pagina web -
                Aquí habrá una pequeña descripción de la pagina web - Aquí habrá una pequeña descripción de la pagina web -
                Aquí habrá una pequeña descripción de la pagina web - Aquí habrá una pequeña descripción de la pagina web</p>
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="blue-grey-text text-darken-3 font-weight-light mb-5">
                  ¡No pauses tus sueños!
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
