import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "./images/3.png"

function Form() {
  return (
    <div id="box-form">

      <div id="header-form-title"></div>
      <div id="header-form-logo"></div>
      <section id="info-form">Preencha suas informações</section>
      <form className="formulario">
        <input className="input-login" placeholder="Digite seu email"></input>
        <input className="input-senha" placeholder="Digite sua senha"></input>
        <a className="recuperar-senha">Esqueceu sua senha?</a>
        <Link to="/"><button id="entrar" className="botao-form"><section></section></button></Link>
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