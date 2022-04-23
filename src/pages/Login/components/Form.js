import React from "react";
import "./style.css";

function Form() {
  return (
    <div className="box-form">
      <section className="box-header"><section>LOGIN</section></section>
      
      <form>
        <input className="login" placeholder="Digite seu email"></input>
        <input className="senha" placeholder="Digite sua senha"></input>
        <section className="recuperar-senha"><section>Esqueceu sua senha?</section></section>
        <section className="botao-entrar"><section>ENTRAR</section></section>
      </form> 

      
{/*       
      <button></button> */}

    </div>
  );
}

export default Form;
