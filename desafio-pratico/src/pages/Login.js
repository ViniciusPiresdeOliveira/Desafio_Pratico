import { useEffect, useState, useContext } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import API from "../api/API";
import "../styles/Login.css"
import { AuthContext } from "../context/auth";

const Login = () => {

  const location = useLocation();
  const [usuario, setUsuario] = useState({});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getUsuario = async () => {
      const response = await API.get(`/api/users`);
      setUsuario(response.data);
    };
    getUsuario();
  }, [location]);

//   useEffect(() => {
//     const recuperarUsuario = localStorage.getItem("user");

//     if (recuperarUsuario) {
//       setUsuario(JSON.parse(recuperarUsuario));
//     }

//     setLoading(false);

// }, [])

  var redirect = useNavigate();


  const { setAuthenticated, logado } = useContext(AuthContext);
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let pessoaLogada;
    usuario.forEach((pessoa) => {
      if (
        pessoa.login == login &&
        pessoa.password == senha
      ) {
        localStorage.setItem(
          "user",
          JSON.stringify(pessoaLogada)
        );
        pessoaLogada = pessoa
        return pessoaLogada
      }
    });
    console.log(pessoaLogada);
    if (pessoaLogada === undefined) {
      alert("Email ou senha inválidos.")
      setAuthenticated(false);
    } else {
      alert("Bem-vindo, " + pessoaLogada.login)
      setAuthenticated(true);
      redirect("/home")
      localStorage.setItem("user", JSON.stringify(pessoaLogada));
      setUser(pessoaLogada);
    }
  }

  function mostrarSenha() {
    var tipo = document.getElementById("senha");
    if (tipo.type === "password") {
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
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="login">
                <Form.Label>Login</Form.Label>
                <Form.Control type="text" required placeholder="Digite seu login..." value={login} onChange={(e) => setLogin(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="senha">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" required placeholder="Digite sua senha..." value={senha} onChange={(e) => setSenha(e.target.value)} />
                {/* <button className="botaoSenha" onClick={mostrarSenha} type="button">Mostrar senha</button> */}
                <Form.Check onClick={mostrarSenha} label="Mostrar senha" />
              </Form.Group>
              <button className="botaoLogin" variant="success btn-block" type="submit">
                Login
              </button>
            </Form>
            <h6 className="perguntaCadastro">Não tem uma conta? </h6>
            <Link to="/cadastro">Cadastre-se</Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login;