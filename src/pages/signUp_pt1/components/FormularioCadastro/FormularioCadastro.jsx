import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class FormularioCadastro extends Component{
    render(){
        return(
            <div className="form_cadastro">
                <div className="header_form_title"></div>
                <div className="header_form_logo"></div>
                <h1 className="info_form">Informações de Usuario:</h1>
                <form>
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

                <Link to={"/sign-up2"}><button id="avancar" className="botao_avancar"><section></section></button></Link>
                        
                </form>
            </div>
        );
    }
}

export default FormularioCadastro;