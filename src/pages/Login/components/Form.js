import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Form() {
  return (
    <div className="box-form">

      <section className="box-header"><section>LOGIN</section></section>
      
      <form className="formulario">
        <input className="login" placeholder="Digite seu email"></input>
        <input className="senha" placeholder="Digite sua senha"></input>
        <a className="recuperar-senha">Esqueceu sua senha?</a>
        <Link to="/home"><button class="login-botao entrar"><section>ENTRAR</section></button></Link>
        <Link to="/sign-up" ><button className="login-botao cadastrar"><section>CADASTRE-SE</section></button></Link>
      </form> 
      {/* <Link to="/">retornar a página inicial</Link> */}

    </div>
  );
}

export default Form;
