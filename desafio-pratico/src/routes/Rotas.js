import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { AuthProvider, AuthContext } from "../context/auth";
import { useState, useContext } from "react";

export function Rotas() {

    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return (
                <div className="loading">Carregando...</div>
            )
        }

        if (!authenticated) {
            return <Navigate to="/" />
        }

        return children;
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="*" element={<Login />} />
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/home" element={<Private><Home /></Private>} />
                    <Route exact path="/cadastro" element={<Cadastro />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default Rotas;