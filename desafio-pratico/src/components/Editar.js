import "../styles/Editar.css"
import edit from "../assets/icon-edit.png"
import del from "../assets/icon-del.png"
import EditarLevel from "../modals/EditarLevel"
import DeleterUserSkills from "../modals/DeletarUserSkills"
import { useState } from "react";

export function Editar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const abrirModal = () => {
        handleShow()
    }

    return (
        <div className="alteracoes">
            <div className="botaoEditar" onClick={() => abrirModal()} title="Editar Level">
                <img className="alteracoes" src={edit} />
            </div>
            <div className="botaoDeletar" onClick={() => abrirModal()} title="Excluir Skill">
                <img className="alteracoes" src={del} />
            </div>
            <EditarLevel show={show} handleClose={handleClose}/>
            <DeleterUserSkills show={show} handleClose={handleClose}/>
        </div >
    )
}