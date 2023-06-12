import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";

const Rutas = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Rutas;
