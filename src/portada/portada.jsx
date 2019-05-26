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
          <h1 className="text-uppercase blue-grey-text text-darken-4 font-weight-bold">
            Step Sound
            <hr className="divider my-3" />
          </h1>
          <p className="text-uppercase blue-grey-text text-darken-4 font-weight-bold" id="subtitulo2">
                     ¿Te imaginas que tu abuelo te hubiese dado un libro con una foto de su lugar favorito? 
                     ¿Qué hubieses hecho tú? 
          </p>
          <p className="text-uppercase blue-grey-text text-darken-4 font-weight-bold">
            Olvidarte de ello o quizás… ¿emprender un viaje en busca de ese lugar?
          </p>
            <div className="col-lg-6 justify-content-center text-center" style={{paddingTop: '25px'}}>
                <div className="row h-100 align-items-center justify-content-center">

                  <div className="col-lg-12 align-self-end">
                     <p className="col-lg-12 align-self-end" id="historia">
                     La historia de Pablo comienza cuando recibe un libro de su abuelo junto con 
                     una misteriosa foto. En ella aparece su abuelo y, al charlar con él, éste le confiesa 
                     que se trata de su lugar favorito desde que era joven. A modo de sorpresa, Pablo pone 
                     en marcha una aventura para encontrar el lugar y poder fotografiarse allí, como un 
                     día lo hizo su abuelo. Desde el momento en el que emprende la búsqueda, lo hace 
                     acompañado de sus cascos. Si tú también quieres acompañar a Pablo y adentrarte en esta historia…
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
