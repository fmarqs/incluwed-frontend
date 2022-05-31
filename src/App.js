import React, { useState, useContext } from "react"
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/signUp_pt1"
import SignUp2 from "./pages/signUp_pt2"
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
        <Route path="/sign-up2" element={<SignUp2/>}/>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
