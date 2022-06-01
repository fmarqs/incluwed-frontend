import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import "./components/FormularioCadastro/style.css"

class SingUp extends Component{
  render(){
    return (
      <div className="body_cadastro">
          <FormularioCadastro/>
      </div>
    );
  }
  
}
export default SingUp;
