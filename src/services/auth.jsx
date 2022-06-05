import React, { createContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession} from '../api/api'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser)
            setUser(JSON.parse(recoveredUser));

        setLoading(false);

    }, [])

    const login = async (email, senha) => {

        const response = await createSession(email, senha)
        console.log("login", response.data);
        
        const loggedUser = response.data.user;
        const token = response.data.token;
        const id = response.data.id;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("user", JSON.stringify(token));
        localStorage.setItem("id", JSON.stringify(id));

        api.defaults.headers.Authorization = `Bearer ${token}`

            setUser(loggedUser);
            navigate("/home");

    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem('user');
        setUser(null);
        navigate("/login");
    }

    return (
        <AuthContext.Provider
        value={{ authenticated: Boolean(user), user, loading, login }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;