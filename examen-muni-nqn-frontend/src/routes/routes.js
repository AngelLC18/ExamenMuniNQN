import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Campus from "../pages/campus/CampusPage.jsx";
import CreatePersona from "../pages/CreatePersona";

const Rutas = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="*" element={<h1>Not Found 404</h1>} />
          <Route path="/formulario" element={<CreatePersona />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Rutas;
