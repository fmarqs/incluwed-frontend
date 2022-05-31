import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext }  from '../../../services/auth';
import "./style.css";
import "./images/3.png"

function Form() {

    const { authenticated, login } = useContext(AuthContext)
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit", {email, senha});
        login(email, senha);
    }

    return (
    <div id="box-form">

      <div id="header-form-title"></div>
      <div id="header-form-logo"></div>
      <section id="info-form">Preencha suas informações</section>
      {/* <p>{String(authenticated)}</p> */}
      <form onSubmit={handleSubmit} className="formulario">
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="input-login" placeholder="Digite seu email"></input>
        <input value={senha} onChange={(e) => setSenha(e.target.value)} className="input-senha" placeholder="Digite sua senha"></input>
        <a className="recuperar-senha">Esqueceu sua senha?</a>
        <button type="submit" id="entrar" className="botao-form"><section></section></button>
        <Link to="/sign-up" ><button id="cadastrar" className="botao-form"><section></section></button></Link>
      </form> 
      {/* <Link to="/">retornar a página inicial</Link> */}

    </div>
  );
}

export default Form;

//criar tela
//receber parametros
//com os forms 
//requisiçao no back