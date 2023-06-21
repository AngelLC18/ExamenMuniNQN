import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

const Rutas = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Rutas;
