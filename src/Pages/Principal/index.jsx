import React, { Component } from "react";
import firebase from "../../Firebase";
import "./styles.css";
import { Link } from "react-router-dom";


class Principal extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      nascimento: ""
    }; 
    
  }

  async componentDidMount(){

    await firebase.auth().onAuthStateChanged(async (usuario)=>{
      if(usuario){
        var uid = usuario.uid;

        await firebase.firestore().collection("usuario").doc(uid).get()
        .then((retorno)=>{

          this.setState({
            nome: retorno.data().nome,
            sobrenome: retorno.data().sobrenome,
            nascimento: retorno.data().nascimento
          });

        })
      }


    });

  }

  

  render(){
    return(
      <div className="container">
        <h1>Tela Principal</h1>
        <h4>Dados Cadastrados do Usuário</h4>
          <p><strong>Nome:</strong> { this.state.nome } </p>
          <p><strong>Sobrenome:</strong> { this.state.sobrenome } </p>
          <p><strong>Nascimento:</strong> { this.state.nascimento } </p>
        
          <Link to="/">Fechar</Link>
          
          <footer className="rodape">
            © 2023 Atividade Somativa - Disciplina Tecnologias para Desenvolvimento Web - PUCPR - by Rafaela Andrade.
          </footer>
         </div>
    )
  }
}

export default Principal;