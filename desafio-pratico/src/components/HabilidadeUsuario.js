import { Container, Row, Col } from 'react-bootstrap'
import "../styles/UserSkills.css"
import { Editar } from './Editar'

export function HabilidadeUsuario({ id, name, version, description, imageUrl }) {

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
                <Editar />
            </Container>
        </>
    )
}