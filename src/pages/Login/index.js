import React from 'react';
import Header from "./components/Header"
import LineHeader from "./components/LineHeader";
import Logo from "./components/Logo"
import Form from './components/Form';

function Login(){

    var altura = window.innerHeight
    var largura = window.innerWidth
    console.log("altura:" + altura)
    console.log("largura:" + largura)

    return (
    <div className='body-login'>
        <Header/> 
        <LineHeader/>
        <Logo/>
        <Form/>
    </div>
    )
}

export default Login;