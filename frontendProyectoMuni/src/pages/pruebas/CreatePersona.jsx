import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Apiurl } from "../services/apirest";

const CreatePersona = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [persona, setPersona] = useState({
    razonSocial: "",
    dni: "",
    genero: "",
    fechaNacimiento: "",
  });
  const form = (e) => {
    e.preventDefault();
  };
  //Función para permitir solo letras y cargarlas al arreglo
  const handleText = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z ]*$/;
    if (value === "" || regex.test(value)) {
      if (e.target.id === "nombre") {
        setNombre(value);
      } else if (e.target.id === "apellido") {
        setApellido(value);
      }
    }
  };
  //Función para permitir solo números y cargarlos al arreglo
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
  const resetForm = () => {
    setNombre("");
    setApellido("");
    setPersona({
      razonSocial: "",
      dni: "",
      genero: "",
      fechaNacimiento: "",
    });
  };

  //Enviar datos del formulario a la base de datos
  const handleButton = async () => {
    //Campos obligatorios
    /*if (
      nombre === '' ||
      apellido === '' ||
      persona.dni === '' ||
      persona.genero === '' ||
      persona.fechaNacimiento === ''
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }*/
    //Creo una variable que concatena las variables nombre y apellido
    //Inserto la variable union en mi parametro "razonSocial" del arreglo persona

    setPersona({
      ...persona,
      razonSocial: `${nombre} ${apellido}`,
    });
    if (persona.dni.length === 8) {
      await axios
        .post(Apiurl + "personas", persona)
        .then((response) => {
          console.log(response.data);
          alert("Persona registrada correctamente");
          resetForm();
        })
        .catch((error) => {
          console.log(error.message);
          alert("Error al registrar persona");
        });
    }
  };
  return (
    <>
      <div className='w-screen h-screen bg-[url("http://neuquentur.gob.ar/lab/wp-content/uploads/2014/10/Monumento-a-San-Mart%C3%ADn-Centro-de-ciudad-de-Neuqu%C3%A9n.jpg")] dark:bg-[url("https://i.ytimg.com/vi/vl9RyQvYuwI/maxresdefault.jpg")]  dark:bg-left bg-no-repeat relative'>
        <div className="dark:bg-gray-950 h-full absolute w-72 sm:w-[540px] right-2">
          <h1 className="font-bold text-3xl flex items-baseline font-mono dark:text-white">
            Añadir Persona
          </h1>
          <form
            className=" absolute  bg-gray-100 dark:bg-slate-700 h-[92%] p-3 drop-shadow-lg rounded-xl  "
            onSubmit={form}
          >
            <div className="flex flex-row flex-wrap gap-4 p-2 justify-center">
              <div className="w-56">
                <label className="relative cursor-text ">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="h-11 w-56  bg-transparent border-black border-1 rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                    autoComplete="off"
                    onChange={handleText}
                    id="nombre"
                  />
                  <span className="text-opacity-80 text-gray-600 bg-gray-100 absolute left-3 -top-[2px] px-1 transition duration-200 input-text">
                    Nombre
                  </span>
                </label>
              </div>
              <div className=" w-56">
                <label className="relative cursor-text">
                  <input
                    id="apellido"
                    type="text"
                    placeholder="apellido"
                    className="h-11 w-56  bg-transparent border-black border-1 rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                    autoComplete="off"
                    onChange={handleText}
                  />
                  <span className="text-opacity-80 text-gray-600 bg-gray-100 absolute left-3 -top-[2px] px-1 transition duration-200 input-text">
                    Apellido
                  </span>
                </label>
              </div>
              <div className="w-56">
                <label className="relative cursor-text">
                  <input
                    type="text"
                    className="h-11 w-56  bg-transparent border-black border-1 rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                    id="dni"
                    value={persona.dni}
                    onChange={(e) => handleNumber(e)}
                    autoComplete="off"
                    placeholder="dni"
                  />
                  <span className="text-opacity-80 text-gray-600 bg-gray-100 absolute left-4 -translate-x-1 -top-[2px] px-1 transition duration-200 input-text">
                    DNI
                  </span>
                </label>
              </div>
              <div className="relative w-56 ">
                <select
                  className=" border-black border-1 rounded-[4px] border-opacity-30 bg-transparent w-56 h-11"
                  defaultValue="default"
                  id="genero"
                  onChange={(e) =>
                    setPersona({ ...persona, genero: e.target.value })
                  }
                >
                  <option disabled value="default">
                    Seleccione un genero
                  </option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
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
      </div>
    </>
  );
};

export default CreatePersona;
