import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Campus from "../pages/campus/CampusPage.jsx";

const Rutas = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/campus" element={<Campus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Rutas;
