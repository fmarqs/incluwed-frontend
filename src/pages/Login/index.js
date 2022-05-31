import React, { useState, useContext } from 'react';
import './components/style.css'
import { AuthContext }  from '../../services/auth';

import Form from './components/Form'


function Login(){
    
    const { authenticated, login } = useContext(AuthContext)
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit", {email, senha});
        login(email, senha);
    }

    return (
        <div className='body-login'>
            {/* <Header/>  */}
            {/* <LineHeader/> */}
            {/* <Logo/> */}
            <Form/>
        </div>
    )
}

export default Login;