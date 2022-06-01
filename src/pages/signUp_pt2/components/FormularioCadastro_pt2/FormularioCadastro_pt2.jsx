import React, { Component } from "react";
import "./style.css";
import DataNascimento from "../DataNascimento";
import Localidade from "../Localidade";
import { Link } from "react-router-dom";

class FormularioCadastro_pt2 extends Component{
    render(){
        return(
                    <form className="form_cadastro02">
                        <DataNascimento/>
                        <Localidade/>
                        <Link to = {"/"}><button className="botao_confirmar">Confirmar</button></Link>
                        
                    </form>
        );
    }
}

export default FormularioCadastro_pt2;