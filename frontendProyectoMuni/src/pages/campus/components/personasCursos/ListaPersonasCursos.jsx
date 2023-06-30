import axios from "axios";
import { useState, useEffect } from "react";
import { Apiurl } from "../../../../services/apirest";

const ListaPersonasCursos = () => {
  const [open, setOpen] = useState(false);
  const [personas, setPersonas] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [modalidades, setModalidades] = useState([]);
  const [personasCursos, setPersonasCursos] = useState([]);
  useEffect(() => {
    getAllData();
  }, []);
  const getAllData = async () => {
    const [
      personasResponse,
      cursosResponse,
      personasCursosResponse,
      modalidadResponse,
    ] = await axios.all([
      axios.get(Apiurl + "personas"),
      axios.get(Apiurl + "cursos"),
      axios.get(Apiurl + "personasCursos"),
      axios.get(Apiurl + "modalidades"),
    ]);
    setPersonas(personasResponse.data);
    setCursos(cursosResponse.data);
    setPersonasCursos(personasCursosResponse.data);
    setModalidades(modalidadResponse.data);
  };
  const getNombreCurso = (id) => {
    const curso = cursos.find((curso) => curso.id === id);
    if (curso) {
      return curso.nombre;
    }
    return "";
  };
  const getNombrePersona = (id) => {
    const persona = personas.find((persona) => persona.id === id);
    if (persona) {
      return persona.razonSocial;
    }
    return "";
  };
  const getNombreModalidad = (id) => {
    const modalidad = modalidades.find((modalidad) => modalidad.id === id);
    if (modalidad) {
      return modalidad.nombre;
    }
    return "";
  };
  return (
    <div className=" absolute z-30 bottom-32 right-0 ">
      <button
        className="fixed bottom-12 right-0 m-5 bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-full "
        onClick={() => setOpen(!open)}
      >
        <i className="fas fa-plus"></i>
      </button>
      <div
        className={`${
          open ? "w-[400px]" : "w-0"
        }  dark:text-gray-100 dark:bg-slate-900 bg-sky-100 rounded-l-xl  duration-300 left-0 z-10 overflow-x-auto  relative `}
      >
        <div className="overflow-hidden  rounded-lg border border-gray-200 shadow-md m-5">
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

export default ListaPersonasCursos;
