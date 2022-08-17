import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import { AuthContext } from '../context/auth';
import add from "../assets/icon-add.png"
export function Header() {

    const { logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout();
    }

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const abrirModal = () => {
    //     handleShow()
    // }

    return (
        <header>
            <div className="header">
                <div className="adicionarSkill" title='Adicionar Skill'>
                    <img src={add}/>
                </div>
                <div className="botaoSair" title='Sair do site'>
                    <button onClick={handleLogout}>Sair</button>
                </div>
                
            </div>
        </header>
    )
}