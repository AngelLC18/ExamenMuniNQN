import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Apiurl } from "../../services/apirest";
import NavbarV2 from "../navbar/Nav-barV2.jsx";

const ShowPersonas = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    getAllPersonas();
  }, []);

  const getAllPersonas = async () => {
    const response = await axios.get(Apiurl + "personas");
    setPersonas(response.data);
    console.log(response.data);
  };
  const deletePersona = async (id) => {
    await axios.delete(Apiurl + "personas/" + id);
    getAllPersonas();
    alert("Persona eliminada");
  };
  return (
    <div className="dark:text-gray-100 dark:bg-slate-900 w-screen min-h-screen">
      <NavbarV2 />
      <div className="grid grid-cols-3">
        <div className="grid place-content-center mt-2 col-span-3">
          <Link
            to="/personas/create"
            className="ml-1 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600"
          >
            Añadir Persona
          </Link>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md mt-5 mb-5 col-span-3">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <React.Fragment>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Apellido
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  DNI
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Genero
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Edad
                </th>
              </React.Fragment>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {personas.map((persona) => (
                <tr className="hover:bg-gray-50" key={persona.id}>
                  <td className="px-6 py-4">{persona.nombre}</td>
                  <td className="px-6 py-4">{persona.apellido}</td>
                  <td className="px-6 py-4">{persona.dni}</td>
                  <td className="px-6 py-4">{persona.genero}</td>
                  <td className="px-6 py-4">{persona.edad}</td>
                  <td>
                    <div className="flex justify-end">
                      <button onClick={() => deletePersona(persona.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                      <Link
                        to={"/personas/edit/" + persona.id}
                        x-data="{ tooltip: 'Edite' }"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/*Listar personas según el genero*/}
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md w-52">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Genero
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Cantidad
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Masculino</td>
                <td className="px-6 py-4">
                  {
                    personas.filter((persona) => persona.genero === "Masculino")
                      .length
                  }
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Femenino</td>
                <td className="px-6 py-4">
                  {
                    personas.filter((persona) => persona.genero === "Femenino")
                      .length
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/*Listar personas según la edad*/}
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md w-52">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <React.Fragment>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Edad
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Cantidad
                </th>
              </React.Fragment>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Menor a 18</td>
                <td className="px-6 py-4">
                  {personas.filter((persona) => persona.edad < 18).length}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Entre 18 y 100</td>
                <td className="px-6 py-4">
                  {
                    personas.filter(
                      (persona) => persona.edad >= 18 && persona.edad <= 100
                    ).length
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowPersonas;
