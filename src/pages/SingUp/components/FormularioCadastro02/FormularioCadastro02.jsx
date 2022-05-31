import React, { Component } from "react";
import "./style.css";
import DataNascimento from "../DataNascimento";
import Localidade from "../Localidade";

class FormularioCadastro02 extends Component{
    render(){
        return(
                    <form className="form_cadastro02">
                        <DataNascimento/>
                        <Localidade/>
                        <button className="botao_confirmar">Confirmar</button>
                    </form>
        );
    }
}

export default FormularioCadastro02;