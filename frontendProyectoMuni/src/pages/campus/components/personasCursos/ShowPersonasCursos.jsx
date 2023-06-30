/* eslint-disable no-self-compare */
import axios from "axios";
import { useState, useEffect } from "react";
import { Apiurl } from "../../../../services/apirest";

const ShowPersonasCursos = () => {
  const [personas, setPersonas] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [personasCursos, setPersonasCursos] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const [personasResponse, cursosResponse, personasCursosResponse] =
      await axios.all([
        axios.get(Apiurl + "personas"),
        axios.get(Apiurl + "cursos"),
        axios.get(Apiurl + "personasCursos"),
      ]);
    setPersonas(personasResponse.data);
    setCursos(cursosResponse.data);
    setPersonasCursos(personasCursosResponse.data);
  };

  const handleChange = (e) => {
    setPersonasCursos([...personasCursos, { [e.target.name]: e.target.value }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(Apiurl + "personasCursos", personasCursos);
    setPersonasCursos([]);
    getAllData();
  };

  return (
    <div className="dark:bg-slate-900 duration-100 m-4 rounded-lg">
      <div className="flex items-center justify-center flex-col mt-3">
        <form
          className="grid max-w-3xl gap-2 py-10 px-8 sm:grid-cols-2 bg-white dark:bg-slate-900 rounded-md "
          onSubmit={handleSubmit}
        >
          <div className="grid">
            <label className="label dark:text-white">Persona</label>
            <select
              className="border-black border-[1px] pl-2 rounded-[4px] outline-none border-opacity-30 bg-transparent  w-56 h-11 dark:bg-slate-700 dark:text-white text-gray-600 transition duration-200"
              name="persona_id"
              onChange={handleChange}
            >
              <option value="">Seleccione una persona</option>
              {personas.map((persona) => (
                <option key={persona.id} value={persona.id}>
                  {persona.razonSocial}
                </option>
              ))}
            </select>
          </div>
          <div className="grid">
            <label className="label dark:text-white">Curso</label>
            <select
              className="border-black border-[1px] pl-2 rounded-[4px] outline-none border-opacity-30 bg-transparent  w-56 h-11 dark:bg-slate-700 dark:text-white text-gray-600 transition duration-200"
              name="curso_id"
              onChange={handleChange}
            >
              <option value="">Seleccione un curso</option>
              {cursos.map((curso) => (
                <option key={curso.id} value={curso.id}>
                  {curso.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="grid place-content-center col-span-2">
            <button
              className="ml-1 bg-sky-700 text-white py-2 px-6 rounded-md hover:bg-sky-800"
              type="submit"
            >
              Crear Relacion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShowPersonasCursos;
