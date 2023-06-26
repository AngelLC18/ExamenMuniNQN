import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Apiurl } from "../../services/apirest";
import NavbarV2 from "../navbar/Nav-barV2";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
const CreateCursos = () => {
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

  const navigate = useNavigate();

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
    navigate("/campus");
  };

  return (
    <div className="w-full min-h-screen grid grid-rows-3 transition-all">
      <NavbarV2 />
      <main className='row-span-2 w-full h-screen bg-[url("http://neuquentur.gob.ar/lab/wp-content/uploads/2014/10/Monumento-a-San-Mart%C3%ADn-Centro-de-ciudad-de-Neuqu%C3%A9n.jpg")] dark:bg-[url("https://i.ytimg.com/vi/vl9RyQvYuwI/maxresdefault.jpg")] dark:bg-left bg-no-repeat relative'>
        <div className="dark:bg-gray-950 h-full absolute w-72 sm:w-[540px] right-2">
          <h1 className="font-bold text-3xl flex items-baseline font-mono dark:text-white">
            Añadir Curso
          </h1>
          <form
            className=" absolute  bg-gray-100 dark:bg-slate-700 h-[92%] p-3 drop-shadow-lg rounded-xl  "
            onSubmit={form}
          >
            <div className="flex flex-row flex-wrap gap-4 p-2 justify-center">
              <div className="w-56">
                <label className="relative cursor-text">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="h-11 w-56 bg-transparent border-black border-1 rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                    autoComplete="off"
                    onChange={handleText}
                    id="nombre"
                    value={curso.nombre}
                  />
                  <span className="text-opacity-80 text-gray-600 bg-gray-100 absolute left-3 -top-[2px] px-1 transition duration-200 input-text">
                    Nombre
                  </span>
                </label>
              </div>
              <div className="w-56">
                <label className="relative cursor-text ">
                  <input
                    type="text"
                    placeholder="Descripcion"
                    className="h-11 w-56  bg-transparent border-black border-1 rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                    id="descripcion"
                    onChange={handleText}
                    value={curso.descripcion}
                  />
                  <span className="text-opacity-80 text-gray-600 bg-gray-100 absolute left-3 -top-[2px] px-1 transition duration-200 input-text">
                    Descripcion
                  </span>
                </label>
              </div>
              <div className="w-56">
                <label className="relative cursor-text ">
                  <input
                    type="text"
                    placeholder="Legajo"
                    className="h-11 w-56  bg-transparent border-black border-1 rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                    autoComplete="off"
                    id="legajo"
                    onChange={handleNumber}
                    value={curso.legajo}
                  />
                  <span className="text-opacity-80 text-gray-600 bg-gray-100 absolute left-3 -top-[2px] px-1 transition duration-200 input-text">
                    Legajo
                  </span>
                </label>
              </div>
              <div className="relative w-56">
                <select
                  className="border-black border-1 rounded-[4px] border-opacity-30 bg-transparent w-56 h-11"
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
              <div className="relative h-11 w-56 ml-1 "></div>
              <div className="absolute bottom-14 flex">
                <button
                  type="submit"
                  className="ml-1 bg-sky-500 text-white py-2 px-6 rounded-md hover:bg-sky-600"
                  onClick={handleButton}
                >
                  Guardar
                </button>
                <Link
                  to="/examen"
                  className="ml-1  bg-sky-500 text-white py-2 px-6 rounded-md hover:bg-sky-600"
                >
                  Volver
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default CreateCursos;
