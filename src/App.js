import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/signUp"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
