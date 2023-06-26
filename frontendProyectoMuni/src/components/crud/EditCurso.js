import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Apiurl } from "../../services/apirest";

const EditCurso = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [modalidades, setModalidades] = useState([]);
  const [curso, setCurso] = useState({
    nombre: "",
    descripcion: "",
    legajo: "",
    modalidad: "",
  });

  useEffect(() => {
    const getModalidades = async () => {
      const response = await axios.get(Apiurl + "modalidades");
      setModalidades(response.data);
      console.log(response.data);
    };
    getModalidades();
    const getCurso = async () => {
      const response = await axios.get(Apiurl + "cursos/" + id);
      setCurso(response.data);
      console.log(response.data);
    };
    getCurso();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const form = (e) => {
    e.preventDefault();
  };

  //Solo letras
  const handleText = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z ]*$/;
    if (value === "" || regex.test(value)) {
      setCurso({
        ...curso,
        [e.target.id]: value,
      });
    }
  };
  //Solo numeros
  const handleNumber = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/;
    if (value === "" || regex.test(value)) {
      setCurso({
        ...curso,
        [e.target.id]: value,
      });
    }
  };
  //Editar curso
  const handleButton = async () => {
    await axios
      .put(Apiurl + "cursos/" + id, curso)
      .then((response) => {
        console.log(response.data);
        alert("Curso editado correctamente");
      })
      .catch((error) => {
        console.log(error.message);
        alert("Error al editar curso");
      });
    navigate("/cursos");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Editar Curso</h1>
          <form onSubmit={form}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                value={curso.nombre || ""}
                onChange={handleText}
              />
            </div>
            <div className="form-group">
              <label htmlFor="descripcion">Descripcion</label>
              <input
                type="text"
                className="form-control"
                id="descripcion"
                value={curso.descripcion || ""}
                onChange={handleText}
              />
            </div>
            <div className="form-group">
              <label htmlFor="legajo">Legajo</label>
              <input
                type="text"
                className="form-control"
                id="legajo"
                value={curso.legajo || ""}
                onChange={handleNumber}
              />
            </div>
            <div className="form-group">
              <label htmlFor="modalidad">Modalidad</label>
              <select
                className="form-control"
                id="modalidad_id"
                value={curso.modalidad_id}
                onChange={(e) =>
                  setCurso({ ...curso, modalidad_id: e.target.value })
                }
              >
                <option value="">Seleccione una modalidad</option>
                {modalidades.map((modalidad) => (
                  <option key={modalidad.id} value={modalidad.id}>
                    {modalidad.nombre}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleButton}
            >
              Editar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditCurso;
