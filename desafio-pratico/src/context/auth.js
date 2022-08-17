import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recuperarUsuario = localStorage.getItem("user");

        if (recuperarUsuario) {
            setUser(JSON.parse(recuperarUsuario));
        }

        setLoading(false);

    }, [])

    // const logado = (login, senha) => {
    //     console.log("login auth", { login, senha });

    //     const usuarioLogado = {
    //         login,
    //         senha,
    //     };

    //     if (senha === "secret") {
    //         setUser(usuarioLogado);
    //         navigate("/home");
    //         alert("Logado com sucesso!")
    //         localStorage.setItem("user", JSON.stringify(usuarioLogado));
    //     } else {
    //         alert("Dados inválidos")
    //     }
    // };
    const [authenticated, setAuthenticated] = useState(false);

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user")
        setUser(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ authenticated, setAuthenticated,user, loading, logout }}>{children}</AuthContext.Provider>
    )
}