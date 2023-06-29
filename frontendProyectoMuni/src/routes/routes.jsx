import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main.jsx";
import Campus from "../pages/campus/CampusPage.jsx";
import CreatePersona from "../pages/CreatePersona.jsx";
import CreateCursos from "../pages/campus/components/CreateCurso.jsx";

const Rutas = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/campus/create" element={<CreateCursos />} />
          <Route path="*" element={<h1>Not Found 404</h1>} />
          <Route path="/formulario" element={<CreatePersona />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Rutas;
