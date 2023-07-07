import { useState, useEffect } from "react";
import axios from "axios";
import { Apiurl } from "../../../services/apirest";

const Muni = () => {
  const [personas, setPersonas] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getAllPersonas();
  }, []);

  const getAllPersonas = async () => {
    let apiurl = "https://weblogin.muninqn.gov.ar/api/Examen";
    try {
      const response = await axios.get(apiurl);
      console.log(response.data.value);
      setPersonas(response.data.value);
    } catch (error) {
      console.log(error);
    }
  };

  const insertarPersonas = async () => {
    try {
      const response = await axios.get(
        "https://weblogin.muninqn.gov.ar/api/Examen"
      );
      const personas = response.data.value;

      if (Array.isArray(personas)) {
        for (let i = 0; i < personas.length; i++) {
          const persona = personas[i];
          const personaReducida = {
            id: persona.id,
            razonSocial: persona.razonSocial,
            fechaNacimiento: persona.fechaNacimiento,
            genero: persona.genero.value,
            dni: persona.dni,
          };
          await axios.post(Apiurl + "personas", personaReducida);
          await new Promise((resolve) => setTimeout(resolve, 1000)); // add a 1 second delay between requests
        }

        console.log("Personas insertadas correctamente");
        alert("Personas insertadas correctamente");
      } else {
        console.log("El endpoint no devolvió una lista de personas");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" absolute z-30 left-0 ">
      <button
        className="fixed bottom-6 right-0 m-5 bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-full "
        onClick={() => setOpen(!open)}
      >
        <i className="fa-solid fa-users"></i>
      </button>
      <div
        className={`${
          open ? "md:w-[600px]" : "w-0"
        }  dark:text-gray-100 dark:bg-slate-900 bg-sky-100   duration-300 left-0 z-10 overflow-y-auto md:h-[741px] relative `}
      >
        <div className=" rounded-lg border border-gray-200  p-10">
          <table className="w-full rounded-2xl bg-white dark:bg-slate-800 text-left text-sm text-gray-500 dark:text-white shadow-md ">
            <thead className="bg-gray-50 dark:bg-slate-700 rounded-lg ">
              <tr className="">
                <th
                  scope="col"
                  className="px-3 py-2 font-medium text-gray-900 dark:text-white"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 font-medium text-gray-900 dark:text-white"
                >
                  Nombre
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 font-medium text-gray-900 dark:text-white"
                >
                  DNI
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 font-medium text-gray-900 dark:text-white"
                >
                  Género
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 font-medium text-gray-900 dark:text-white"
                >
                  Fecha de Nacimiento
                </th>
              </tr>
            </thead>
            {personas.length > 0 ? (
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {personas.map((persona) => (
                  <tr
                    className="hover:bg-gray-50 dark:hover:bg-slate-900"
                    key={persona.id}
                  >
                    <td className="px-3 py-2">{persona.id}</td>
                    <td className="px-3 py-2">{persona.razonSocial}</td>
                    <td className="px-3 py-2">{persona.dni}</td>
                    <td className="px-3 py-2">{persona.genero.value}</td>
                    <td className="px-3 py-2 text-center">
                      {persona.fechaNacimiento.split("T")[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan="5" className="px-3 py-2">
                    Cargando...
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
        <div className="flex gap-2 ml-10">
          {/*Listar personas según el genero*/}
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md w-52 bg-white dark:bg-slate-800 mb-2">
            <table className="w-full h-full border-collapse bg-white dark:bg-slate-800 text-left text-sm text-gray-500 dark:text-white">
              <thead className="bg-gray-50 dark:bg-slate-900 ">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-2 font-medium text-gray-900 dark:text-white "
                  >
                    Genero
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 font-medium text-gray-900 dark:text-white"
                  >
                    Cantidad
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                <tr className="hover:bg-gray-50 dark:hover:bg-slate-900">
                  <td className="px-3 py-2">Masculino</td>
                  <td className="px-3 py-2">
                    {
                      personas.filter(
                        (persona) => persona.genero.value === "MASCULINO"
                      ).length
                    }
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-slate-900">
                  <td className="px-3 py-2">Femenino</td>
                  <td className="px-3 py-2">
                    {
                      personas.filter(
                        (persona) => persona.genero.value === "FEMENINO"
                      ).length
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*Listar personas según la edad*/}
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md w-52 bg-white dark:bg-slate-800 mb-2">
            <table className="w-full border-collapse bg-white dark:bg-slate-800 text-left text-sm text-gray-500 dark:text-white">
              <thead className="bg-gray-50 dark:bg-slate-900 ">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-2 font-medium text-gray-900 dark:text-white"
                  >
                    Edad
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 font-medium text-gray-900 dark:text-white"
                  >
                    Cantidad
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                <tr className="hover:bg-gray-50 dark:hover:bg-slate-900">
                  <td className="px-3 py-2">Menor a 18</td>
                  <td className="px-3 py-2">
                    {
                      personas.filter(
                        (persona) => persona.fechaNacimiento > "2005-06-1"
                      ).length
                    }
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-2">Mayores a 18</td>
                  <td className="px-3 py-2">
                    {
                      personas.filter(
                        (persona) => persona.fechaNacimiento < "2005-06-1"
                      ).length
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/*Insertar personas a la base de datos*/}
        <div className="w-full flex justify-center">
          <button
            className="rounded-xl bg-blue-400 p-2 hover:scale-105 duration-200 mb-2 "
            onClick={insertarPersonas}
          >
            Insertar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Muni;
