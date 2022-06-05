import React, { Component } from "react";
import "./style.css";

class localidade extends Component{
    render(){
        return(
        <div>
            <h5 className="header_localidade">Informar localidade:</h5>

            <p className="header_input_estado">Estado</p>
            <input 
            type="text"
            className="input_estado"/>

            <p className="header_input_cidade">Cidade</p>
            <input 
            type="text"
            className="input_cidade"/>
            
            <p className="header_input_bairro">Bairro</p>
            <input 
            type="text"
            className="input_bairro"/>

            <p className="header_input_numero">N°</p>                        
            <input 
            type="text"
            className="input_numero"/>

            <p className="header_input_rua">Rua</p>                        
            <input 
            type="text"
            className="input_rua"/>

            
         </div>
         );
    }
}

export default localidade;