import React from 'react';
import Header from "./components/Header"
import LineHeader from "./components/LineHeader";
import Logo from "./components/Logo"
import Form from './components/Form';

function Login(){
    return (
    <div>
        <Header/> 
        <LineHeader/>
        <Logo/>
        <Form/>
    </div>
    )
}

export default Login;