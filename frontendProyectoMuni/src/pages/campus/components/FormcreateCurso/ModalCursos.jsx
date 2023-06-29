import axios from "axios";
import { useState, useEffect } from "react";
import { Apiurl } from "../../../../services/apirest";
const ModalCursos = () => {
  const [modalidades, setModalides] = useState([]);
  const [curso, setCurso] = useState({
    nombre: "",
    descripcion: "",
    legajo: "",
    modalidad_id: "",
  });

  useEffect(() => {
    const getModalidades = async () => {
      const response = await axios.get(Apiurl + "modalidades");
      setModalides(response.data);
      console.log(response.data);
    };
    getModalidades();
  }, []);

  const form = (e) => {
    e.preventDefault();
  };

  const handleText = (e) => {
    const value = e.target.value;
    setCurso({
      ...curso,
      [e.target.id]: value,
    });
  };
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

  const handleButton = async (e) => {
    e.preventDefault();
    //Validacion de legajo
    if (
      curso.nombre === "" ||
      curso.descripcion === "" ||
      curso.legajo === "" ||
      curso.modalidad_id === ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }
    if (curso.legajo.length !== 5) {
      alert("El legajo debe tener 5 digitos");
      return;
    }
    if (curso.legajo.length === 5) {
      await axios
        .post(Apiurl + "cursos", curso)
        .then((response) => {
          console.log(response.data);
          alert("Curso creado correctamente");
        })
        .catch((error) => {
          console.log(error.message);
          alert("Error al crear curso");
        });
    }
  };

  return (
    <div className=" h-[40%] w-auto flex flex-col items-center">
      <h1 className="font-bold text-3xl text-center flex items-baseline font-mono dark:text-white">
        Añadir Curso
      </h1>
      <form
        className="  bg-gray-100 dark:bg-slate-700 h-[80%] w-80 md:w-[550px] p-3 drop-shadow-lg rounded-xl  "
        onSubmit={form}
      >
        <div className="flex flex-row flex-wrap gap-4 p-2 justify-center">
          <div className="w-56">
            <label className="relative cursor-text">
              <input
                type="text"
                placeholder="Nombre"
                className="h-11 w-56 bg-transparent pl-2 dark:text-white   border-black border-[1px] rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                autoComplete="off"
                onChange={handleText}
                id="nombre"
                value={curso.nombre}
              />
              <span className="text-opacity-80 dark:text-white   dark:bg-slate-700 text-gray-600 bg-gray-100 absolute left-3 -top-[2px] px-1 transition duration-200 input-text">
                Nombre
              </span>
            </label>
          </div>
          <div className="w-56">
            <label className="relative cursor-text ">
              <input
                type="text"
                placeholder="Descripcion"
                className="h-11 w-56  bg-transparent pl-2 dark:text-white  border-black border-[1px] rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                id="descripcion"
                onChange={handleText}
                value={curso.descripcion}
              />
              <span className="text-opacity-80 dark:bg-slate-700 dark:text-white  text-gray-600 bg-gray-100  absolute left-3 -top-[2px] px-1 transition duration-200 input-text">
                Descripcion
              </span>
            </label>
          </div>
          <div className="w-56">
            <label className="relative cursor-text ">
              <input
                type="text"
                placeholder="Legajo"
                className="h-11 w-56  bg-transparent pl-2 dark:text-white border-black border-[1px] rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                autoComplete="off"
                id="legajo"
                onChange={handleNumber}
                value={curso.legajo}
              />
              <span className="text-opacity-80 dark:text-white dark:bg-slate-700 text-gray-600 bg-gray-100 absolute left-3 -top-[2px] px-1 transition duration-200 input-text">
                Legajo
              </span>
            </label>
          </div>
          <div className="relative w-56">
            <select
              className="border-black border-[1px] pl-2 rounded-[4px] outline-none border-opacity-30 bg-transparent  w-56 h-11 dark:bg-slate-700 dark:text-white text-gray-600 transition duration-200"
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
          <div className=" flex items-center">
            <button
              type="submit"
              className="ml-1 bg-sky-500 text-white py-2 px-6 rounded-md hover:bg-sky-600"
              onClick={handleButton}
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ModalCursos;
