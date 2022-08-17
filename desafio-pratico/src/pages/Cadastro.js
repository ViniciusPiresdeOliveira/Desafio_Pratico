import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Login.css"

const Cadastro = () => {
    function mostrarSenha() {
        var tipo = document.getElementById("senha");
        if (tipo.type == "password") {
            tipo.type = "text";
        } else {
            tipo.type = "password";
        }
    }

    return (
        <>
            <Container>
                <h1 className="tituloLogin">Cadastre-se</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className=" formulario p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required placeholder="Digite seu email..." />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" required id="senha" placeholder="Digite sua senha..." />
                                <button className="botaoLogin" onClick={mostrarSenha} type="button">Apresentar senha</button>
                                <br></br>
                                <Form.Label>Confirme sua Senha</Form.Label>
                                <Form.Control type="password" required id="senha" placeholder="Digite sua senha..." />
                                <button className="botaoLogin" onClick={mostrarSenha} type="button">Apresentar senha</button>
                            </Form.Group>
                            <button className="botaoLogin" variant="success btn-block" type="submit">
                                Login
                            </button>
                        </Form>
                        <Link to="/cadastro">Cadastre-se</Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cadastro;