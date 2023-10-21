
import {BrowserRouter,Route, Routes} from "react-router-dom";

import {Login} from "../../component/Login/login";
import {Cadastro} from "../../component/Cadastro/cadastro";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/" element={<Cadastro/>}/>
          </Routes>
              </BrowserRouter>
    );
}