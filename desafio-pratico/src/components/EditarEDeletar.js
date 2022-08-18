import "../styles/Editar.css"
import edit from "../assets/icon-edit.png"
import del from "../assets/icon-del.png"
import EditarSkills from "../modals/EditarSkills"
import DeletarSkills from "../modals/DeletarSkills"
import { useState } from "react";
import API from "../api/API"
import { useNavigate } from "react-router-dom"

export function EditarEDeletar({id}) {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);
    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);

    const abrirModal1 = () => {
        handleShow1()
    }

    const abrirModal2 = () => {
        handleShow2()
    }

    var navigate = useNavigate();

    function deletar(e) {
        e.preventDefault();
        if (id === undefined) {
            alert("Nada")
            return;
        }
        API.delete(`/api/skills/${id}`)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))
            // handleClose2()
            // navigate({ replace: true });
            // window.location.reload();
    }
    
    return (
        <div className="alteracoes">
            <div className="botaoEditar" onClick={() => abrirModal1()} title="Editar Level">
                <img className="alteracoes" src={edit} />
            </div>
            <EditarSkills show={show1} handleClose={handleClose1}/>
            <div className="botaoDeletar" onClick={() => abrirModal2()} title="Excluir Skill">
                <img className="alteracoes" src={del} />
            </div>
            <DeletarSkills acao={(e) => deletar(e)} show={show2} handleClose={handleClose2}/>
        </div >
    )
}