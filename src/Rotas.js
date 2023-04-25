import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";
import Principal from "./Pages/Principal";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cadastro />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Principal" element={<Principal />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;