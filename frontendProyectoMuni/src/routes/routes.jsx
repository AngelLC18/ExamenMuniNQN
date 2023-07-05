import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main.jsx";
import Campus from "../pages/campus/CampusPage.jsx";
import CreateCursos from "../pages/campus/components/CreateCurso.jsx";
import Personas from "../pages/personas/Personas.jsx";
import ShowPersonasCursos from "../pages/campus/components/personasCursos/RelacionPersonaCurso.jsx";

const Rutas = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/campus/create" element={<CreateCursos />} />
          <Route path="*" element={<h1>Not Found 404</h1>} />
          <Route path="/personas" element={<Personas />} />
          <Route path="/personasCursos/:id" element={<ShowPersonasCursos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Rutas;
