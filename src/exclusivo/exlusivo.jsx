import React, { Component } from 'react';
import SpotifyPlayer from 'react-spotify-player';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC_lfeiOuGVwGlfHr-q1UkbKsnCIwIQUV4",
    authDomain: "stepsound-23449.firebaseapp.com",
    databaseURL: "https://stepsound-23449.firebaseio.com",
    projectId: "stepsound-23449",
    storageBucket: "stepsound-23449.appspot.com",
    messagingSenderId: "988324115088",
    appId: "1:988324115088:web:8f14050507208854"
  };

  firebase.initializeApp(firebaseConfig)


export default class Exclusivo extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }

    this.updateInput = this.updateInput.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
  }
  componentDidMount() {
   const mensajes = firebase.firestore();
   let self = this;
    mensajes.collection("mensajes")
    .onSnapshot(function(snapshot) {
         snapshot.docChanges().forEach(function(change) {
              if (change.type === "added") {
                const data = change.doc.data();
                const {email, body, name} = data;
                let newMessage = {email, body, name};

                  self.onAddItem(newMessage);
                  console.log("New message: ", data);
                }
              
              if (change.type === "modified") {
                  console.log("Modified message: ", change.doc.data());
              }
              if (change.type === "removed") {
                  console.log("Removed message: ", change.doc.data());
              }
          });
    },function(error) {
       console.log("Ha sucedido algo", error);
    });

  }

  onAddItem(data){
    this.setState(state => {
      const list = state.messages.push(data);
      return {
        list
      };
    });
  };
  
  updateInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  addMessage(e){

     e.preventDefault();
     const db = firebase.firestore();
      const userRef = db.collection("mensajes").add({
        name: this.state.txtName,
        body: this.state.txtMsj,
        email: this.state.txtEmail,
        created: firebase.firestore.Timestamp.fromDate(new Date())
      });  

     this.setState({
      txtName: "",
      txtMsj: "",
      txtEmail: ""
    });

  }

  render() {
    return (
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center animated fadeIn slow">
        <div className="col-md-8 text-center">
            <h2 className="section-title mb-3" style={{paddingTop:"50px"}}>CONTENIDO EXCLUSIVO</h2>
            <hr className="divider my-4"/>
          </div>
        </div>
        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=fxjqdey8h" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen  id="revista"></iframe>

        <div className="row mb-5 mt-5 justify-content-center animated fadeIn slow">
        <div className="col-lg-12 justify-content-center text-center">
          <h5 className="section-title mb-3">LISTAS DE REPRODUCCIONES</h5>
          <hr className="divider my-4"/>
        </div>
          <div className="col-lg-6 text-justify" id="spoty">
                <p className="lead" style={{paddingTop: "50px", fontSize: "25px"}}>¡Esta es nuestra playlist de Spotify! En ella encontrarás todas las canciones que han ido apareciendo en los 
                capítulos de esta apasionante aventura. Además, hemos añadido más éxitos de los grupos y cantantes que han acompañado 
                a Pablo en su viaje y que también pueden acompañarte en los tuyos.
                </p>
          </div>
          <div className="col-lg-6" id="rep" style={{paddingTop:"30px"}}>  
              <SpotifyPlayer
                uri="spotify:playlist:4UGpp0J09HxYKDMhOV1HxW"
                size={{width: '100%', height: '300'}}
                view="coverart"
                theme="black"
              />
          </div>

          <div className="col-lg-6" id="rep" style={{paddingTop:"30px"}}>  
          <SpotifyPlayer
                uri="spotify:playlist:71Iaje2kejiQI1Vmd2nj7H"
                size={{width: '100%', height: '300'}}
                view="coverart"
                theme="black"
              />
          </div> 
          <div className="col-lg-6 text-justify" id="spoty">
            <p className="lead" style={{paddingTop: "50px", fontSize: "25px"}}>
              ¿Quieres crear una playlist pero no sabes cuándo? ¡Este es el momento! Te dejamos esta playlist colaborativa en la que puedes 
              ir añadiendo tus canciones favoritas para compartirlas con todos los stepsounders. 
            </p>
          </div>         

        <div className="col-lg-12 justify-content-center text-center">
          <h5 className="section-title mb-3" style={{paddingTop:"100px"}}>MAKING OF</h5>
          <hr className="divider my-4"/>
        </div>
          <div className="col-lg-6 text-justify" id="spoty">
          ¡Dale al play y descubre todo el proceso de esta historia! Nos acompañarás en el desarrollo de este 
          proyecto desde el principio hasta el final, viendo como hemos grabado en cada uno de los diez 
          lugares en los que ha estado Pablo. De esta manera, descubrirás quién se encuentra detrás de las 
          cámaras y cómo nos hemos desplazado hasta esos lugares. 
          <p>
          Hemos de confesar que, aún teniendo planeado el rodaje, han surgido inconvenientes como cambios 
          inesperados de tiempo o agotamientos de batería antes de lo previsto, que hemos conseguido resolver 
          con éxito. Además, en nuestro making of, podrás ver quién ha ido creando la página web desde 
          cero y cómo se llevan las redes sociales. Por último, hemos añadido “bloopers” divertidos y 
          tomas falsas para cerrar este proyecto entre risas, con el que hemos aprendido y descubierto 
          habilidades que teníamos escondidas. 
          </p>
          <p className="lead text-center">
          ¿ESTÁS PREPARADO/A?
          </p>
          </div>
            <div className="col-lg-6" id="rep">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/GgWF6YkifNI" 
              frameborder="0" 
              allow="autoplay; encrypted-media" 
              allowfullscreen>
            </iframe>
            </div>

          <div className="col-lg-12 justify-content-center text-center">
            <h5 className="section-title mb-3" style={{paddingTop:"100px"}}>COMENTARIOS</h5>
            <hr className="divider my-4"/>
        </div>


           <div className="col-md-12 mt-2">
           <div className="row">

           {
            this.state.messages.map(item => (
               <div className="col-md-4 mt-2">
                <div class="card card blue-grey darken-1">
                  <div class="card-content white-text">

                    <h5 class="card-title">  <i class="fa fa-user-circle" aria-hidden="true"></i> {item.name}</h5>
                    <p class="card-text">{item.body}</p>
                    <p class="card-text"><small class="text-muted">{item.email}</small></p>
                  </div>
                </div>
              </div>
          ))}
          </div>
          </div>

          <div className="col-md-8 mt-2">
            

            <div className="card">
              <div className="card-body">
              <form onSubmit={this.addMessage}>
                <div className="form-group">
                  <label htmlFor="txtName">¡Tú opinión nos interesa mucho! </label>
                  <input required value={this.state.txtName || ''} onChange={this.updateInput} className="form-control" name="txtName" type="text" id="txtName" placeholder="Nombre"/>
                  </div>

                <div className="form-group">
                  <input required value={this.state.txtEmail || ''} onChange={this.updateInput} className="form-control" name="txtEmail" type="email" id="txtEmail" placeholder="Correo"/>
                  </div>
                <div className="form-group">
                  <label htmlFor="txtMsj">¡Cuéntanos!</label>
                  <textarea required value={this.state.txtMsj || ''} onChange={this.updateInput} className="" name="txtMsj" id="txtMsj" placeholder="Escribe aquí..." />
                </div>
                 <div className="form-group d-flex align-items-center flex-column">
                      <input type="submit" value="Enviar" className="btn btn-primary btn-enviar mt-2"/>
                 </div>
              </form>
              </div>
            </div>

           </div>

        </div>
      </div>
    );
  }
}