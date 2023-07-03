/* eslint-disable no-self-compare */
import axios from "axios";
import { useState, useEffect } from "react";
import { Apiurl } from "../../../../services/apirest";
import { Link } from "react-router-dom";
import NavbarV2 from "../../../../components/navbar/Nav-barV2";
import Footer from "../../../../components/footer/Footer";

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
      return persona.razonSocial;
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
    console.log(personaCurso);

    // Si la persona esta inscripta en un curso con la misma modalidad, no se puede inscribir
    if (personaCurso.persona_id === "" || personaCurso.curso_id === "") {
      alert("Debe seleccionar una persona y un curso");
      return;
    }

    const cursoSeleccionado = cursos.find(
      (curso) => curso.id === personaCurso.curso_id
    );
    const modalidadCursoSeleccionado = modalidades.find(
      (modalidad) => modalidad.id === cursoSeleccionado.modalidad_id
    );

    const personaInscriptaEnCursoConMismaModalidad = personasCursos.some(
      (pc) => {
        const curso = cursos.find((c) => c.id === pc.curso_id);
        const modalidad = modalidades.find((m) => m.id === curso.modalidad_id);
        return (
          pc.persona_id === personaCurso.persona_id &&
          modalidad.id === modalidadCursoSeleccionado.id
        );
      }
    );

    if (personaInscriptaEnCursoConMismaModalidad) {
      alert("La persona ya está inscripta en un curso con la misma modalidad");
      return;
    }

    // Si la persona no esta inscripta en un curso con la misma modalidad, se puede inscribir
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
    <div className='dark:text-gray-100 bg-[url("https://descubres.com/wp-content/uploads/2020/07/IMG_20200710_142628-scaled.jpg")] bg-cover dark:bg-[url("https://guiamarex.com/store/contenido/neuquen/paseo-de-la-costa/paseo-de-la-costa-portada.jpg")] duration-100 w-full min-h-screen grid grid-rows-3'>
      <NavbarV2 />
      <main className="row-span-2 flex flex-col justify-center min-h-screen items-center gap-2">
        <div className="mt-20 gap-2">
          <form
            className="grid max-w-3xl gap-2 py-10 px-8 sm:grid-cols-2 bg-white dark:bg-slate-900 rounded-md border-t-4 border-sky-400"
            onSubmit={handleSubmit}
          >
            <div className="grid">
              <label className="dark:text-white">Persona</label>
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
              <label className="dark:text-white">Curso</label>
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
                className="ml-1 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
                type="submit"
              >
                Crear Relacion
              </button>
            </div>
          </form>
        </div>
        <div className=" w-[520px] max-h-[420px] rounded-lg border border-gray-200 shadow-md overflow-y-auto">
          <table className="w-full  border-collapse bg-white dark:bg-slate-900  text-left text-sm text-gray-500 overflow-y-auto duration-200 transition-all">
            <thead className="bg-gray-50 dark:bg-slate-950">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  Persona
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  Curso
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  Modalidad
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {personasCursos.map((personaCurso) => (
                <tr
                  className="hover:bg-gray-50 dark:hover:bg-slate-800"
                  key={personaCurso.id}
                >
                  <td className="px-6 py-4 dark:text-white">
                    {getNombrePersona(personaCurso.persona_id)}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
                    {getNombreCurso(personaCurso.curso_id)}
                  </td>
                  <td className="px-6 py-4 dark:text-white">
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
        <Link
          to="/"
          className="ml-1 bg-blue-500 text-white mb-1 py-2 px-6 rounded-md hover:bg-blue-600"
        >
          {" "}
          Regresar{" "}
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default ShowPersonasCursos;
