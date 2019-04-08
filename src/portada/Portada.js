import React, { Component } from 'react';
import '../../styles/App.css';
import '../../public/img/logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Portada extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="site-blocks-cover overlay Img-portada" data-aos="fade" id="home-section">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6 mt-lg-5 text-center">
                <h1>Step Sound</h1>
                <p className="mb-5">Que somos</p>
                <button href="#" className="btn btn-primary mr-2 mb-2">Ingresar</button>
              </div>   
            </div>
          </div>
        </div> 
      </div>
    );
  }
}