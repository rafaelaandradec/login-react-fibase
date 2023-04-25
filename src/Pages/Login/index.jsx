import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import firebase from "../../Firebase";
import "firebase/auth"



class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
            erro: ""
        };

        this.acessar = this.acessar.bind(this);
    }

async acessar() {

        //no signIn faz a validação de email e senha no firebase

    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(() => {
            window.location.href = "./Principal";
        })
        .catch((erro) =>{
            this.setState({ erro: <strong>"O usuário informado não está cadastrado!"</strong>})
        });

}

    
render(){
  return (
    <div id="login">
        <h1 className="title">Login do Sistema</h1>
            <h3>Insira seus dados de login:</h3>
                <form className="form" >
                    <div className="field">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" name="email" id="email" onChange={(evento) => this.setState({email: evento.target.value})}/> 
                    </div>
                    <div className="field">
                        <label htmlFor="senha"><strong>Senha</strong></label>
                        <input type="password" name="senha" id="senha" onChange={(evento) => this.setState({senha: evento.target.value})}/> 
                    </div>

                    
                     <br/>
                     <Link to="/Login">
                        <button type="submit" className="login-button" onClick={this.acessar}>Acessar</button>   
                    </Link>                
                    <br/>
                    <p>{this.state.erro}</p>
                    <br/>
                    <Link to="/">Cadastre-se clicando aqui!</Link>

                   
                </form>

        <footer className="rodape">
            © 2023 Atividade Somativa - Disciplina Tecnologias para Desenvolvimento Web - PUCPR - by Rafaela Andrade.
        </footer>        
    </div>
 
    );
    };
}


export default Login;