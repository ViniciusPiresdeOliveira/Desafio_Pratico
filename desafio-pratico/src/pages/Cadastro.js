import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Login.css"

const Cadastro = () => {

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [senha2, setSenha2] = useState("");

    function mostrarSenha() {
        var tipo = document.getElementById("senha");
        if (tipo.type == "password") {
            tipo.type = "text";
        } else {
            tipo.type = "password";
        }
    }

    function mostrarSenha2() {
        var tipo = document.getElementById("confirma");
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
                            <Form.Group controlId="login">
                                <Form.Label>Login</Form.Label>
                                <Form.Control type="text" value ={login} required placeholder="Digite seu login..."
                                onChange={(e) => setLogin(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="senha">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" required placeholder="Digite sua senha..." onChange={(e) => setSenha(e.target.value)}/>
                                <Form.Check onClick={mostrarSenha} label="Mostrar senha" />
                                </Form.Group>
                                <Form.Group controlId="confirma">
                                <Form.Label>Confirme sua Senha</Form.Label>
                                <Form.Control type="password" required placeholder="Digite sua senha..." onChange={(e) => setSenha2(e.target.value)}/>
                                <Form.Check onClick={mostrarSenha2} label="Mostrar senha" />
                            </Form.Group>
                            <button className="botaoLogin" variant="success btn-block" type="submit">
                                Cadastrar
                            </button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cadastro;