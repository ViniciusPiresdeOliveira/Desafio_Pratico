import { Modal, Form, Button } from "react-bootstrap";
import { Input } from "reactstrap";
import API from "../api/API";
import "../styles/ModalEditar.css"

export default function EditarLevel({ show, handleClose }) {

    return (
        <Modal className="containerModal" show={show} onHide={handleClose}>
            <button className="close" onClick={handleClose}>
                <h3>X</h3>
            </button>
            <Modal.Body className='modalBody'>
                <div>
                    <div className="informacoesAlteradas"><b>Nome*</b></div>
                    <Input
                        className="inputNome"
                        type="text"
                        placeholder="Nome"
                    //   onChange={(e) => setNomeColaborador(e.target.value)}
                    />
                </div>
                <div className="styleDiv">
                    <div className="informacoesAlteradas"><b>Versão*</b></div>
                    <Input
                        type="text"
                        placeholder="Versão"
                    //   onChange={(e) => setEMail(e.target.value)}
                    />
                </div>
                <div className="inputFlex">
                    <div className="styleDiv">
                        <div className="informacoesAlteradas"><b>Descrição*</b></div>
                        <Input
                            type="text"
                            placeholder="Descrição"
                        // onChange={(e) => setAreaDeAtuacao(e.target.value)}
                        />
                    </div>
                    <div className="styleDiv">
                        <div className="informacoesAlteradas"><b>Imagem(URL)*</b></div>
                        <Input
                            type="text"
                            placeholder="URL"
                        // onChange={(e) => setObservacoes(e.target.value)}
                        />
                    </div>
                </div>
            </Modal.Body>
            {/* <ModalColaboradorUpdateFotoAnexo identificadorId={identificadorId} tema={tema} /> */}
            <Modal.Footer className="modalFooter">
                <div>
                    <div className="containerBotoesModal">
                        <button
                            className='botoesModal botaoAtualizar'
                        // onClick={(e) => atualizarColaborador(e)}
                        >
                            {/* <img className="salvar" src={salvar} alt="neki" /> */}
                            Atualizar
                        </button>
                    </div>
                </div>
                <div className="containerBotoesModal">
                    <button className='botoesModal botaoCancelar' onClick={handleClose}  >
                        {/* <img className="salvar" src={cancelar} alt="neki" /> */}
                        Cancelar
                    </button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}