import React, { Component } from "react";
import "./style.css";

class localidade extends Component{
    render(){
        return(
        <div>
            <h5 className="header_localidade">Informar localidade</h5>

            <p className="header_input_CEP">CEP</p>
            <input 
            type="text"
            className="input_CEP"/>

            <p className="header_input_pais">Pais</p>
            <input 
            type="text"
            className="input_pais"/>
            
            <p className="header_input_estado">Estado</p>
            <input 
            type="text"
            className="input_estado"/>

            <p className="header_input_cidade">Cidade</p>                        
            <input 
            type="text"
            className="input_cidade"/>

            
         </div>
         );
    }
}

export default localidade;