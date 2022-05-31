import React, { Component } from "react";
import FormularioCadastro02 from "./components/FormularioCadastro_pt2";
import "./components/FormularioCadastro_pt2/style.css"


class SignUp extends Component{
  render(){
    return (
      <div className="body_cadastro">
          <FormularioCadastro02/>
      </div>
    );
  }
  
}
export default SignUp;
