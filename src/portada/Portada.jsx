import React, { Component } from 'react';
import { Redirect } from 'react-router';


export default class Portada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnClicked: false,
    };
    this.btnHandler = this.btnHandler.bind(this);
  }
  btnHandler() {
    this.setState({btnClicked: true});
  }
  render() {
    const { btnClicked } = this.state;
    if (btnClicked) {
      return <Redirect push to="/inicio" />;
    }
    return (
      <div className="App">
        <div className="site-blocks-cover overlay Img-portada" data-aos="fade" id="home-section">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6 mt-lg-5 text-center">
                <h1>Step Sound</h1>
                <p className="mb-5">¡No pauses tus sueños!</p>
                <button onClick={this.btnHandler} className="btn btn-primary mr-2 mb-2">Ingresar</button>
              </div>   
            </div>
          </div>
        </div> 
      </div>
    );
  }
}