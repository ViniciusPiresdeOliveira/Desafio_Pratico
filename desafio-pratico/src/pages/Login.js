import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import API from "../api/API";
import "../styles/Login.css"
const Login = () => {

    const location = useLocation();
    const [usuario, setUsuario] = useState({});
  
    useEffect(() => {
      const getUsuario = async () => {
        const response = await API.get(`/api/users`);
        setUsuario(response.data);
      };
      getUsuario();
    }, [location]);
  
    var redirect = useNavigate();
  
    const onSubmit = (data, evn) => {
      evn.preventDefault();
      let pessoaLogada;
      usuario.forEach((pessoa) => {
        if (
          pessoa.emailCliente === data.enderecoEmail &&
          pessoa.senha === data.Senha
        ) {
          window.localStorage.setItem(
            "usuario",
            JSON.stringify(pessoa)
          );
          pessoaLogada = pessoa
          return pessoaLogada
        }
      });
      if(pessoaLogada === undefined){
        alert("Email ou senha inválidos.")
      }else{
        alert("Bem-vindo, "+ pessoaLogada.nomeCliente)
  
        redirect("/home")
      }
    };


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
            <Container className="container-pai2">
                <h1 className="tituloLogin">Login</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className=" formulario p-5 m-auto shadow-sm rounded-lg">
                        <Form onSubmit={onSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" required placeholder="Digite seu email..." />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" required id="senha" placeholder="Digite sua senha..." />
                                <button onClick={mostrarSenha} type="button">Apresentar senha</button>
                                <Form.Check label="Salvar senha" />
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

export default Login;