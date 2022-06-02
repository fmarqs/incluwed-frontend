import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

const initialValues = {
    email:"",
    nome:"",
    senha:""
}

class FormularioCadastro extends Component{
    render(){
        const onSubmit = () => {
            
            // post("", user)
            // .then((response) => setUser(response.data))
            // .catch((err) =>{ 
            //     console.error("ops! ocorreu um erro" + err);
            // });
            
        }

        return(
            <div className="form_cadastro">
                <div className="header_form_title"></div>
                <div className="header_form_logo"></div>
                <h1 className="info_form">Informações de Usuario:</h1>
                <form onSubmit={onSubmit}>
                
                <input 
                type="text" 
                placeholder="Nome"
                className="input_nome"/>

                <input 
                type="text" 
                placeholder="Sobrenome"
                className="input_sobrenome"/>

                <input 
                type="text"
                placeholder="Digite seu e-mail"
                className="input_email"/>
                         
                <input 
                type="text" 
                placeholder="Digite sua Senha"
                className="input_senha"/>

                <Link to={"/sign-up2"} ><button type="submit" id="avancar" className="botao_avancar"><section></section></button></Link>
                        
                </form>
            </div>
        );
    }
}

export default FormularioCadastro;