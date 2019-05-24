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
      <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=fvh3bls97" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
        <div className="row mb-5 mt-5 justify-content-center animated fadeIn slow">
          <div className="col-md-8 text-left">
            <h2 className="section-title mb-3">Contenido Exclusivo</h2>
            <hr className="divider my-4"/>
            <p className="lead">Making Of.</p>
            <div>
              <p className="lead">Lista de Reproducciones.</p>
              <SpotifyPlayer
                uri="spotify:playlist:4UGpp0J09HxYKDMhOV1HxW"
                size={{width: '100%', height: 300}}
                view="coverart"
                theme="black"
              />
            </div>
          </div>

           <div className="col-md-12 mt-2">
           <div className="row">

           {
            this.state.mensajes.map(item => (
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