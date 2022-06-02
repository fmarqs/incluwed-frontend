import React, { Component } from "react";
import "./style.css";

class DataNascimento extends Component{
    render(){
        return(
        <section>
            <h1 className="header_nasc">Data de Nascimento:</h1>

            <p className="header_input_data">Dia/Mês/Ano</p>
            <input 
            type="text"
            placeholder="dd/mm/aaaa"
            className="input_data"/>

         </section>
         );
    }
}

export default DataNascimento;