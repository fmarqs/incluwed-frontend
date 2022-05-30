import SingUp from "./pages/SingUp";
import React, { Component } from "react";
import "./assets/App.css"


class App extends Component {
  render(){
    return(
      <div>
        <section className="conteudo">
          <SingUp/>
        </section>
      </div>
      
    );
  } 
}

export default App;
