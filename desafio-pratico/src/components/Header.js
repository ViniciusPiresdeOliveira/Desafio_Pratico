import React, { useContext, useState } from 'react'
import '../styles/Header.css'
import { AuthContext } from '../context/auth';
import add from "../assets/icon-add.png";
import CriarSkills from '../modals/CriarSkills';

export function Header() {

    const { logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout();
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const abrirModal = () => {
        handleShow()
    }

    return (
        <header>
            <div className="header">
                <div className="adicionarSkill" onClick={() => abrirModal()} title='Adicionar Skill'>
                    <img src={add} />
                </div>
                <CriarSkills show={show} handleClose={handleClose}/>
                <div className="botaoSair" title='Sair do site'>
                    <button onClick={handleLogout}>Sair</button>
                </div>
            </div>
        </header>
    )
}