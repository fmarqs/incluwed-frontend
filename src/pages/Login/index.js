import React, { useState, useContext } from 'react';
import './components/style.css'
import { AuthContext }  from '../../services/auth';

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
    // <div className='body-login'>
    //     {/* <Header/>  */}
    //     {/* <LineHeader/> */}
    //     {/* <Logo/> */}
    //     <Form/>
    // </div>
    <div>
        <h1> Login </h1>
        <p>{String(authenticated)}</p>
        <form onSubmit={handleSubmit}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'></input>
            <input value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Senha'></input>
            <button type="submit">Entrar</button>
        </form>
    </div>

    )
}

export default Login;