import React, { Component } from "react";
import { Redirect } from "react-router";
import "../../public/informacion/introduccion/Intro.mp4";
import "../../public/img/portada.jpg";

export default class Portada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnClicked: false,
      down: ''      
    };
    this.btnHandler = this.btnHandler.bind(this);
    this.introduccionOnclick = this.introduccionOnclick.bind(this);
  }
  btnHandler() {
    this.setState({ btnClicked: true });
  }
  introduccionOnclick(e) {
    
    this.setState({down:''});
    setTimeout(() => {
      this.setState({down:'animated pulse'});
    }, 100);
  }
  render() {
    const { btnClicked, down } = this.state;
    if (btnClicked) {
      return <Redirect push from="/" to="/participar" />;
    }
    return (
      <div className="overlay base-portada animated slideInDown" data-aos="fade" id="home-section">
            <header className="main-header" id="header">
              <div className="container text-center" id="abajo">
                  <a href="#move" className="animated pulse zoom" id="v">V</a>
              </div>
            </header>
      <section id="move"/>
      <section>
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center animated fadeIn slow">
            <div className="col-lg-6 justify-content-center text-center" style={{paddingTop: '25px'}}>
                <div className="row h-100 align-items-center justify-content-center">
                  <div className="col-lg-12 align-self-end">
                    <h1 className="text-uppercase blue-grey-text text-darken-4 font-weight-bold">
                      Step Sound
                    </h1>
                    <hr className="divider my-3" />
                  </div>
                  <div className="col-lg-12 align-self-end">
                     <p className="font-weight-light blue-grey-text text-justify text-darken-3 mt-4">
                      La historia comienza cuando el abuelo recuerda que tenía que dejar un libro a su nieto.
                      Resulta que en ese libro había una foto donde aparece el abuelo en un misterioso lugar
                      cuando era jóven, concretamente su lugar favorito.
                      </p>
                      <p className="font-weight-light mb-5 blue-grey-text text-justify text-darken-3">
                        A modo de sorpresa, el nieto pone en marcha una aventura para encontrar el lugar
                        y poder fotografiarse allí, como un día lo hizo su abuelo.
                        Desde el momento que emprende la búsqueda lo hace acompañado de sus cascos...
                      </p>
                  </div>
                   <div className="col-lg-6 align-self-baseline">
                      <p className="blue-grey-text text-darken-3 font-weight-light mb-5">
                        ¡No pauses tus sueños!
                      </p>
                      <button
                        onClick={this.btnHandler}
                        className="btn mr-2 mb-2" id="redirec" >
                        Empezar el viaje
                      </button>
                    </div>
                </div>               
              </div>
              <div className="col-lg-6">
              <video
                className="responsive-video"
                controls
              >
                <source src="Intro.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}
