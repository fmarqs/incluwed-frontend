import React, { Component } from "react";
import "./style.css";

class InfAdicionais extends Component{
    render(){
        return(
            <div>
                <h1 className="header_inf">Informações adicinais:</h1>
                <p className="header_input_telefone">Telefone</p>
                <input 
                type="text"
                className="input_DDD"/>
                <input 
                type="text"
                className="input_telefone"/>
                <p className="header_input_CPF">CPF</p>
                <input 
                type="text"
                className="input_CPF"/>
            </div>
        );
    }
}

export default InfAdicionais;