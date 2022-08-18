import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import API from '../api/API';
import DeletarSkills from '../modals/DeletarSkills'
import "../styles/Skills.css"
import { EditarEDeletar } from './EditarEDeletar'

export function HabilidadeUsuario({ id, name, version, description, imageUrl }) {
    const handleShow2 = () => setShow2(true);
    const handleClose2 = () => setShow2(false);
    const [show2, setShow2] = useState(false);

    const abrirModal2 = () => {
        handleShow2()
    }

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
        <>
            <Container className="container-pai">
                <Container className="containers" data-aos="fade-up">
                    <Row>
                        <div className="zoom">
                            <img src={imageUrl} className="img" />
                        </div>
                        <div className="rows">
                            <Col className="columns">Id: {id}</Col>
                            <Col className="columns">Nome: {name}</Col>
                            <Col className="columns">Versão: {version}</Col>
                            <Col className="columns">Descrição: {description}</Col>
                        </div>
                    </Row>
                </Container>
                <EditarEDeletar />
                {/* <DeletarUserSkills acao={(e) => deletar(e)} show={show2} handleClose={handleClose2}/> */}
            </Container>
        </>
    )
}