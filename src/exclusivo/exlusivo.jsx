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
    .orderBy('created', 'asc')
    .onSnapshot(function(snapshot) {
         snapshot.docChanges().forEach(function(change) {
              if (change.type === "added") {
                const data = change.doc.data();
                const {email, body, name} = data;
                let newMessage = {email, body, name};

                  self.onAddItem(newMessage);
                }
              
              if (change.type === "modified") {
                  console.info("Modified message: ", change.doc.data());
              }
              if (change.type === "removed") {
                  console.info("Removed message: ", change.doc.data());
              }
          });
    },function(error) {
       console.error("Ha sucedido algo", error);
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
    const {txtName, txtMsj, txtEmail} = this.state;
     e.preventDefault();
     const db = firebase.firestore();
      b.collection("mensajes").add({
        name: txtName,
        body: txtMsj,
        email: txtEmail,
        created: firebase.firestore.Timestamp.fromDate(new Date())
      });  

     this.setState({
      txtName: "",
      txtMsj: "",
      txtEmail: ""
    });

  }

  render() {
    const {messages, txtName, txtEmail, txtMsj} = this.state;
    return (
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center animated fadeIn slow">
        <div className="col-md-8 text-center">
            <h2 className="section-title mb-3" style={{paddingTop:"50px"}}>CONTENIDO EXCLUSIVO</h2>
            <hr className="divider my-4"/>
          </div>
        </div>
        <center>
          <p className="subtitle">
            ¡Echa un vistazo a la revista Step Sound en la que encontrarás todo sobre los cantantes y grupos que han protagonizado esta 
            aventura! Cómo surgieron, curiosidades, éxitos… ¡No te lo pierdas!
          </p>
        </center>
        <iframe
          src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=fdk5ecpzy"
          width="100%"
          height="480"
          seamless="seamless"
          scrolling="no"
          frameBorder="0"
          allowFullScreen
        />
        <div className="row mb-5 mt-5 justify-content-center animated fadeIn slow">
        <div className="col-lg-12 justify-content-center text-center">
          <h5 className="section-title mb-3">LISTAS DE REPRODUCCIONES</h5>
          <hr className="divider my-4"/>
        </div>
          <div className="col-lg-6 text-justify spoty" >
                <p className="lead" style={{fontSize: "20px"}}>
                <b>¡Esta es nuestra playlist de Spotify!</b> 
                En ella encontrarás todas las canciones que han ido apareciendo en los capítulos de esta apasionante aventura. 
                Además, hemos añadido más éxitos de los grupos y cantantes que han acompañado a Pablo en su viaje y que también 
                pueden acompañarte en los tuyos.
                </p>
          </div>
          <div className="col-lg-6 rep" >  
              <SpotifyPlayer
                uri="spotify:playlist:4UGpp0J09HxYKDMhOV1HxW"
                size={{width: '100%', height: '300'}}
                view="coverart"
                theme="black"
              />
          </div>

          <div className="col-lg-6 rep" >  
          <SpotifyPlayer
                uri="spotify:playlist:71Iaje2kejiQI1Vmd2nj7H"
                size={{width: '100%', height: '300'}}
                view="coverart"
                theme="black"
              />
          </div> 
          <div className="col-lg-6 text-justify spoty">
            <p className="lead" style={{fontSize: "20px"}}>
              <b>¿Quieres crear una playlist pero no sabes cuándo? ¡Este es el momento</b>! Te dejamos esta playlist colaborativa en la que puedes 
              ir añadiendo tus canciones favoritas para compartirlas con todos los stepsounders. 
            </p>
          </div>         

        <div className="col-lg-12 justify-content-center text-center">
          <h5 className="section-title mb-3" style={{paddingTop:"100px"}}>MAKING OF</h5>
          <hr className="divider my-4"/>
          <p className="subtitle" >
              ¡Dale al play y descubre todo el proceso de esta historia! 
        </p>
        </div>
          <div className="col-lg-6">
            <div className="col-lg-12 text-justify" id="makingOf">
            Nos acompañarás en el desarrollo de este proyecto desde el principio hasta el final. De esta manera, 
            descubrirás quién se encuentra detrás de las cámaras. Además, podrás ver quién ha ido creando la página web 
            desde cero y cómo se llevan las redes sociales. 
            Hemos de confesar que han surgido inconvenientes pero hemos conseguido resolverlos con éxito.
            Por último, hemos añadido “bloopers” divertidos y tomas falsas para cerrar este proyecto entre risas, 
            con el que hemos aprendido y descubierto habilidades que teníamos escondidas. 
            </div>
            <center>
              ¿ESTÁS PREPARADX?
            </center>
          </div>
            <div className="col-lg-6 rep" >
            <iframe
              style={{
                width:"100%",
                height:"100%",
                minHeight: "400px"
              }}
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
            messages.map((item, i) => (
               <div className="col-md-4 mt-2 d-flex" key={i}>
                <div className="card card blue-grey darken-1 flex-fill">
                  <div className="card-content white-text">

                    <h5 className="card-title">  <i className="fa fa-user-circle" aria-hidden="true"></i> {item.name}</h5>
                    <p className="card-text flex-fill">{item.body}</p>
                    <p className="card-text"><small className="text-muted">{item.email}</small></p>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
          </div>

          <div className="col-md-8 mt-2">
            

            <div className="card">
              <div className="card-body">
              <form onSubmit={this.addMessage}>
                <div className="form-group">
                  <label htmlFor="txtName">¡Tú opinión nos interesa mucho! </label>
                  <input required value={txtName || ''} onChange={this.updateInput} className="form-control" name="txtName" type="text" id="txtName" placeholder="Nombre"/>
                  </div>

                <div className="form-group">
                  <input required value={txtEmail || ''} onChange={this.updateInput} className="form-control" name="txtEmail" type="email" id="txtEmail" placeholder="Correo"/>
                  </div>
                <div className="form-group">
                  <label htmlFor="txtMsj">¡Cuéntanos!</label>
                  <textarea required value={txtMsj || ''} onChange={this.updateInput} className="" name="txtMsj" id="txtMsj" placeholder="Escribe aquí..." />
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