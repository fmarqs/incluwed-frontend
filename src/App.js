import React, { useState, useContext } from "react"
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/signUp"
import {AuthProvider, AuthContext} from './services/auth'

function App() {
  const Private = ({children}) => {
    const { authenticated, loading } = useContext(AuthContext);

    if(loading)
      return <div className="loading">Loading...</div>;

    if(authenticated)
      return <Navigate to='/home'/>
    
    return children
  }

  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/home" 
        element={
        <Private>
          <Home/>
        </Private>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
