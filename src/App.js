import React, { useContext } from "react"
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/signUp_pt1"
import SignUp2 from "./pages/signUp_pt2"
import Profile from "./pages/Home/components/Profile"
import {AuthProvider, AuthContext} from './services/auth'


function App() {
  const Private = ({children}) => {
    const { authenticated } = useContext(AuthContext);

    console.log(authenticated)

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
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/sign-up2" element={<SignUp2/>}/>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
