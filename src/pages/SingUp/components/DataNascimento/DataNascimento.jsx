import React, { Component } from "react";
import "./style.css";

class DataNascimento extends Component{
    render(){
        return(
        <div>
            <h1 className="header_nasc">Data de Nascimento:</h1>

            <p className="header_input_dia">dia</p>
            <input 
            type="text"
            placeholder="dd"
            className="input_dia"/>

            <p className="header_input_mes">mes</p>
            <input 
            type="text" 
            placeholder="mm"
            className="input_mes"/>

            <p className="header_input_ano">ano</p>
            <input 
            type="text" 
            placeholder="aaaa"
            className="input_ano"/>
         </div>
         );
    }
}

export default DataNascimento;