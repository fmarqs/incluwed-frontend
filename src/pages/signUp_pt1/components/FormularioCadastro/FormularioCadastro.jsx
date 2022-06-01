import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class FormularioCadastro extends Component{
    render(){
        return(
            <div>
                    <form className="form_cadastro">
                        <input 
                         type="text"
                         placeholder="Digite seu e-mail"
                         className="input_email"/>
                         
                        <input 
                         type="text" 
                         placeholder="Nome de Usuario"
                         className="input_usuario"/>

                        <input 
                         type="text" 
                         placeholder="Digite sua Senha"
                         className="input_senha"/>
                        <Link></Link>
                        <Link to={"/sign-up2"}><button className="botao_avancar">Avançar</button></Link>
                        
                    </form>
            </div>
        );
    }
}

export default FormularioCadastro;