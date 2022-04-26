import React from "react";
import "./style.css";

function Form() {
  return (
    <div className="box-form">
      <section className="box-header"><section>LOGIN</section></section>
      
      <form className="formulario">
        <input className="login" placeholder="Digite seu email"></input>
        <input className="senha" placeholder="Digite sua senha"></input>
        <a className="recuperar-senha">Esqueceu sua senha?</a>
        <button className="botao-entrar"><section>ENTRAR</section></button>
      </form> 

    </div>
  );
}

export default Form;
