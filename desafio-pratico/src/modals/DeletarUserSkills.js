import { Modal, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Input } from "reactstrap";
import API from "../api/API";
import "../styles/ModalEditar.css"

export default function DeletarUserSkills({ show, handleClose, acao, id }) {
        
    return (
        <Modal style={{ marginTop: "9rem" }} show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title style={{ color: "white" }}>Deletar Skills</Modal.Title>
                <button className="close" onClick={handleClose}>
                    <h3>X</h3>
                </button>
            </Modal.Header>
            <h3 style={{ fontSize: 17, padding: 20, color:"white" }}>Tem certeza que deseja deletar a Skill?</h3>
            <Modal.Footer>
                <div>
                    <button
                        className='adicionar botoesModal'
                        onClick={(e) => acao(e)}
                    >
                        Confirmar
                    </button>
                </div>
                <div >
                    <button className='deletar botoesModal' onClick={handleClose}>
                        Cancelar
                    </button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}