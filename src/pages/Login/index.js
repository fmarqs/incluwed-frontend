import React, {useState} from 'react';
import Header from "./components/Header"
import LineHeader from "./components/LineHeader";
import Logo from "./components/Logo"
import Form from './components/Form';
import './components/style.css'
import axios from 'axios';
import authService from '../../services/authService';



function Login(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function handleLogin(){
        
        try {
            await authService.login(email, senha)
        } catch (error) {
            console.log(error);
        }

    }

    var altura = window.innerHeight
    var largura = window.innerWidth
    console.log("altura:" + altura)
    console.log("largura:" + largura)

    return (
    // <div className='body-login'>
    //     {/* <Header/>  */}
    //     {/* <LineHeader/> */}
    //     {/* <Logo/> */}
    //     <Form/>
    // </div>
    <div>
        <h1> Login </h1>
        <form>
            <input value={email} onChange={(exemplo)=>setEmail(exemplo.target.value)} placeholder='Email'></input>
            <input value={senha} onChange={(exemplo)=>setSenha(exemplo.target.value)} placeholder='Senha'></input>
            <button onClick={ handleLogin }>Entrar</button>
        </form>
    </div>

    )
}

export default Login;