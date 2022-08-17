import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Login from "../pages/Login";

const Private = ({Item}) => {
    const signed = false;

    return signed > 0 ? <Item/> : <Login/>;
}
export function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Private Item={Home} />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </Router>
    )
}

export default Rotas;