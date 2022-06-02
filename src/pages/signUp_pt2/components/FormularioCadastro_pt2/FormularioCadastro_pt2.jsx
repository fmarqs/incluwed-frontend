import React, { Component } from "react";
import "./style.css";
import DataNascimento from "../DataNascimento";
import Localidade from "../Localidade";
import { Link } from "react-router-dom";
import InfAdicionais from "../InfAdicionais";

class FormularioCadastro_pt2 extends Component{
    render(){
        return(
            <div className="form_cadastro02">
                <div className="header_form_title"></div>
                <div className="header_form_logo"></div>
                <form>
                    <InfAdicionais/>
                    <DataNascimento/>
                    <Localidade/>
                    <Link to = {"/"}><button id="confirmar" className="botao_confirmar"><section></section></button></Link>
                        
                </form>
            </div>
        );
    }
}

export default FormularioCadastro_pt2;