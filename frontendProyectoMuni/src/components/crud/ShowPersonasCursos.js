/* eslint-disable no-self-compare */
import axios from "axios";
import { useState, useEffect } from "react";
import { Apiurl } from "../../services/apirest";
import NavbarV2 from "../navbar/Nav-barV2.jsx";

const ShowPersonasCursos = () => {
  const [personas, setPersonas] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [modalidades, setModalidades] = useState([]);
  const [personasCursos, setPersonasCursos] = useState([]);
  const [personaCurso, setPersonaCurso] = useState({
    persona_id: "",
    curso_id: "",
  });
  useEffect(() => {
    getAllPersonas();
    getAllCursos();
    getAllPersonasCursos();
    getAllModalidades();
  }, []);

  const getAllPersonas = async () => {
    const response = await axios.get(Apiurl + "personas");
    setPersonas(response.data);
    console.log(response.data);
  };

  const getNombrePersona = (id) => {
    const persona = personas.find((persona) => persona.id === id);
    if (persona) {
      return persona.nombre;
    }
    return "";
  };

  const getAllCursos = async () => {
    const response = await axios.get(Apiurl + "cursos");
    setCursos(response.data);
    console.log(response.data);
  };

  const getNombreCurso = (id) => {
    const curso = cursos.find((curso) => curso.id === id);
    if (curso) {
      return curso.nombre;
    }
    return "";
  };

  const getAllPersonasCursos = async () => {
    const response = await axios.get(Apiurl + "personasCursos");
    setPersonasCursos(response.data);
    console.log(response.data);
  };

  const getAllModalidades = async () => {
    const response = await axios.get(Apiurl + "modalidades");
    setModalidades(response.data);
    console.log(response.data);
  };

  const getNombreModalidad = (id) => {
    const modalidad = modalidades.find((modalidad) => modalidad.id === id);
    if (modalidad) {
      return modalidad.nombre;
    }
    return "";
  };

  const handleChange = (e) => {
    setPersonaCurso({
      ...personaCurso,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Una persona se puede inscribir a 1 solo curso por modalidad.
    const mismaModalidad = personasCursos.find(
      (personaCurso) =>
        personaCurso.persona_id === personaCurso.persona_id &&
        cursos.find((curso) => curso.id === personaCurso.curso_id) &&
        cursos.find((curso) => curso.id === personaCurso.curso_id)
          .modalidad_id ===
          cursos.find((curso) => curso.id === personaCurso.curso_id)
            .modalidad_id
    );

    if (mismaModalidad) {
      alert(
        "La persona ya se encuentra inscrita a un curso de la misma modalidad"
      );
      return;
    }

    await axios
      .post(Apiurl + "personasCursos", personaCurso)
      .then((response) => {
        console.log(response.data);
        alert("Relación creada correctamente");
      })
      .catch((error) => {
        console.log(error.message);
        alert("Error al crear la relación");
      });
    getAllPersonasCursos();
  };

  return (
    <div className="dark:bg-slate-900 duration-100 min-w-screen min-h-screen">
      <NavbarV2 />
      <div className="flex items-center justify-center flex-col mt-3">
        <form
          className="grid max-w-3xl gap-2 py-10 px-8 sm:grid-cols-2 bg-white rounded-md border-t-4 border-purple-400"
          onSubmit={handleSubmit}
        >
          <div className="grid">
            <label className="label">Persona</label>
            <select
              className="select select-primary w-full max-w-xs"
              name="persona_id"
              onChange={handleChange}
            >
              <option value="">Seleccione una persona</option>
              {personas.map((persona) => (
                <option key={persona.id} value={persona.id}>
                  {persona.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="grid">
            <label className="label">Curso</label>
            <select
              className="select select-primary w-full max-w-xs"
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
              className="ml-1 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600"
              type="submit"
            >
              Crear Relacion
            </button>
          </div>
        </form>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-2/6">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Persona
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Curso
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Modalidad
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {personasCursos.map((personaCurso) => (
                <tr className="hover:bg-gray-50" key={personaCurso.id}>
                  <td className="px-6 py-4">
                    {getNombrePersona(personaCurso.persona_id)}
                  </td>
                  <td className="px-6 py-4">
                    {getNombreCurso(personaCurso.curso_id)}
                  </td>
                  <td className="px-6 py-4">
                    {cursos.find(
                      (curso) => curso.id === personaCurso.curso_id
                    ) &&
                      cursos.find((curso) => curso.id === personaCurso.curso_id)
                        .modalidad_id &&
                      getNombreModalidad(
                        cursos.find(
                          (curso) => curso.id === personaCurso.curso_id
                        ).modalidad_id
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowPersonasCursos;
