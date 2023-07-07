/* eslint-disable no-self-compare */
import axios from "axios";
import { useState, useEffect } from "react";
import { Apiurl } from "../../../../services/apirest";
import { Link } from "react-router-dom";
import NavbarV2 from "../../../../components/navbar/Nav-barV2";
import Footer from "../../../../components/footer/Footer";
import { useParams } from "react-router-dom";

const ShowPersonasCursos = () => {
  const [personas, setPersonas] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [modalidades, setModalidades] = useState([]);
  const [personasCursos, setPersonasCursos] = useState([]);
  const [personaCurso, setPersonaCurso] = useState({
    persona_id: "",
    curso_id: "",
  });
  const [cursoSeleccionado, setCursoSeleccionado] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getAllPersonas();
    getAllCursos();
    getAllPersonasCursos();
    getAllModalidades();
  }, []);
  useEffect(() => {
    // Obtener detalles del curso seleccionado utilizando el ID
    const selectedCurso = cursos.find((curso) => curso.id === parseInt(id));
    setCursoSeleccionado(selectedCurso || {});
  }, [id, cursos]);

  const getAllPersonas = async () => {
    const response = await axios.get(Apiurl + "personas");
    setPersonas(response.data.value);
    console.log(response.data.value);
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
    <div className='dark:text-gray-100 bg-[url("https://descubres.com/wp-content/uploads/2020/07/IMG_20200710_142628-scaled.jpg")] bg-cover dark:bg-[url("https://guiamarex.com/store/contenido/neuquen/paseo-de-la-costa/paseo-de-la-costa-portada.jpg")] dark:bg-[73%] duration-100 min-h-screen grid grid-rows-3'>
      <NavbarV2 />
      <main className="row-span-2 flex flex-col justify-center min-h-screen items-center gap-2 relative">
        <div className="w-80 bg-white dark:bg-slate-900 dark:border-sky-400 border-[2px] rounded-md flex p-2 justify-center items-center h-20 mt-20 mb-2">
          {Object.keys(cursoSeleccionado).length > 0 ? (
            <div className="text-[9px] text-black dark:text-white font-bold">
              <h2 className="text-center">
                Información del curso seleccionado
              </h2>
              <p>Nombre: {cursoSeleccionado.nombre}</p>
              <p>Descripción: {cursoSeleccionado.descripcion}</p>
              <p>
                Modalidad: {getNombreModalidad(cursoSeleccionado.modalidad_id)}
              </p>
            </div>
          ) : (
            <p>Cargando curso seleccionado...</p>
          )}
        </div>
        <div className="gap-2">
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
                className="border-black border-[1px] pl-2 rounded-[4px] outline-none border-opacity-30 bg-transparent w-56 h-11 dark:bg-slate-700 dark:text-white text-gray-600 transition duration-200"
                name="curso_id"
                onChange={handleChange}
                value={cursoSeleccionado.curso_id}
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
        <div className=" w-[520px] max-h-[420px] rounded-lg  border-gray-200 dark:border-sky-400 border-[2px] shadow-md overflow-y-auto">
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
