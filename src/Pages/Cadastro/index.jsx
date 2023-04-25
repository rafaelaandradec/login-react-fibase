import "./styles.css";
import { Link } from "react-router-dom";
import firebase from "../../Firebase";
import { Component } from "react";



class Cadastro extends Component {
   constructor(props){
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            nascimento: "",
            email: "",
            senha: ""
        }
        this.gravar = this.gravar.bind(this);
   }

async gravar() {

    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .then( async (retorno) => {

        await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            nascimento: this.state.nascimento
        });

    });



  
}

   render(){
        return(
            <div className="cadastro-usuario">
                <h1>Cadastro de Usuário</h1>
                <h3>Realize o cadastro para acessar a página de Login do Sistema:</h3>
                <form className="form" >
                <div className="field">
                    <label htmlFor="nome"><strong>Nome</strong></label>
                    <input type="text" name="nome" id="nome" onChange={(evento) => this.setState({nome: evento.target.value})}/> 
                </div>
                <div className="field">
                    <label htmlFor="sobrenome"><strong>Sobrenome</strong></label>
                    <input type="text" name="sobrenome" id="sobrenome" onChange={(evento) => this.setState({sobrenome: evento.target.value})}/> 
                </div>
                <div className="field">
                    <label htmlFor="nascimento"><strong>Data de Nascimento</strong></label>
                    <input type="date" name="nascimento" id="nascimento" onChange={(evento) => this.setState({nascimento: evento.target.value})}/> 
                </div>
                <div className="field">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" name="email" id="email" onChange={(evento) => this.setState({email: evento.target.value})}/> 
                </div>
                <div className="field">
                    <label htmlFor="senha"><strong>Senha</strong></label>
                    <input type="password" name="senha" id="senha" onChange={(evento) => this.setState({senha: evento.target.value})}/> 
                </div>
                
                <Link to="/Login">
                    <button type="submit" onClick={this.gravar}>Cadastrar</button>
                </Link>

                <br/>
                    <Link to="/Login">Já sou cadastrado</Link>
                </form>
                <footer className="rodape">
                    © 2023 Atividade Somativa - Disciplina Tecnologias para Desenvolvimento Web - PUCPR - by Rafaela Andrade.
                </footer>
            </div>
        ); 
    };   
}
export default Cadastro;