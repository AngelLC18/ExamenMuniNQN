import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Apiurl } from "../../services/apirest";

const EditPersona = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [persona, setPersona] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    genero: "",
    edad: "",
  });
  const updatePersona = async (e) => {
    e.preventDefault();
    //Validaciones de edad y dni
    if (persona.edad > 100) {
      alert("La edad debe ser menor a 100");
      return;
    }
    await axios
      .put(Apiurl + "personas/" + id, persona)
      .then((response) => {
        console.log(response.data);
        alert("Persona actualizada correctamente");
      })
      .catch((error) => {
        console.log(error.message);
        alert("Error al actualizar persona");
      });
    navigate("/personas");
  };

  const handleText = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z ]*$/;
    if (value === "" || regex.test(value)) {
      setPersona({
        ...persona,
        [e.target.id]: value,
      });
    }
  };
  const handleNumber = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/;
    if (value === "" || regex.test(value)) {
      setPersona({
        ...persona,
        [e.target.id]: value,
      });
    }
  };

  useEffect(() => {
    const getPersona = async () => {
      const response = await axios.get(Apiurl + "personas/" + id);
      setPersona(response.data);
    };
    getPersona();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>Editar Persona</h3>
      <form onSubmit={updatePersona}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={persona.nombre || ""}
            onChange={(e) => handleText(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            value={persona.apellido || ""}
            onChange={(e) => handleText(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">DNI</label>
          <input
            type="text"
            className="form-control"
            id="dni"
            value={persona.dni || ""}
            onChange={(e) => handleNumber(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Genero</label>
          <select
            className="form-select"
            id="genero"
            defaultValue="default"
            onChange={(e) => setPersona({ ...persona, genero: e.target.value })}
          >
            <option disabled value="default">
              Seleccione un genero
            </option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Edad</label>
          <input
            type="text"
            className="form-control"
            id="edad"
            value={persona.edad || ""}
            onChange={(e) => handleNumber(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default EditPersona;
