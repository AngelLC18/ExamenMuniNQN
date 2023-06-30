import { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import NavbarV2 from "../../components/navbar/Nav-barV2";
import axios from "axios";
import { Apiurl } from "../../services/apirest";
import BotonModalPersonas from "./components/BotonModalPersonas";
const Personas = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    getAllPersonas();
  }, []);

  const getAllPersonas = async () => {
    const response = await axios.get(Apiurl + "personas");
    setPersonas(response.data);
    console.log(response.data);
  };

  return (
    <div className='dark:text-gray-100 bg-[url("https://descubres.com/wp-content/uploads/2020/07/IMG_20200710_142628-scaled.jpg")] bg-cover dark:bg-[url("https://guiamarex.com/store/contenido/neuquen/paseo-de-la-costa/paseo-de-la-costa-portada.jpg")] duration-100 w-full min-h-screen grid grid-rows-3'>
      <NavbarV2 />
      <main className="row-span-2 flex flex-col justify-center min-h-screen items-center mb-2 gap-2">
        <h1 className="text-6xl font-bold font-mono mt-16">Personas</h1>
        <BotonModalPersonas />
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md mt-5 mb-5  col-span-3">
          <table className="w-full border-collapse bg-white dark:bg-slate-900 text-left text-sm text-gray-500">
            <thead className="bg-gray-50 dark:bg-slate-700 ">
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Razon Social
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                DNI
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Genero
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Fecha de Nacimiento
              </th>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {personas.map((persona) => (
                <tr
                  className="hover:bg-gray-50 dark:hover:bg-slate-800 dark:text-white"
                  key={persona.id}
                >
                  <td className="px-6 py-4">{persona.razonSocial}</td>
                  <td className="px-6 py-4">{persona.dni}</td>
                  <td className="px-6 py-4">{persona.genero}</td>
                  <td className="px-6 py-4 text-center">
                    {persona.fechaNacimiento.split("T")[0]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-row gap-2 ">
          {/*Listar personas según el genero*/}
          <div className="overflow-hidden rounded-lg border border-gray-200 dark:bg-slate-900 shadow-md w-52 ">
            <table className="w-full border-collapse bg-white dark:bg-slate-900 text-left text-sm dark:text-white text-gray-500 h-full">
              <thead className="bg-gray-50 dark:bg-slate-700 ">
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  Genero
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  Cantidad
                </th>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                <tr className="hover:bg-gray-50 dark:hover:bg-slate-800">
                  <td className="px-6 py-4">Masculino</td>
                  <td className="px-6 py-4">
                    {
                      personas.filter(
                        (persona) => persona.genero === "Masculino"
                      ).length
                    }
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-slate-800">
                  <td className="px-6 py-4">Femenino</td>
                  <td className="px-6 py-4">
                    {
                      personas.filter(
                        (persona) => persona.genero === "Femenino"
                      ).length
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*Listar personas según la edad*/}
          <div className="overflow-hidden rounded-lg border border-gray-200 dark:bg-slate-900 shadow-md w-52 ">
            <table className="w-full border-collapse bg-white dark:bg-slate-900 text-left text-sm dark:text-white text-gray-500">
              <thead className="bg-gray-50 dark:bg-slate-700">
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  Edad
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  Cantidad
                </th>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                <tr className="hover:bg-gray-50 dark:hover:bg-slate-800">
                  <td className="px-6 py-4">Menor a 18</td>
                  <td className="px-6 py-4">
                    {
                      personas.filter(
                        (persona) => persona.fechaNacimiento > "2005-06-1"
                      ).length
                    }
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-slate-800">
                  <td className="px-6 py-4">Entre 18 y 100</td>
                  <td className="px-6 py-4">
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
      </main>
      <Footer />
    </div>
  );
};

export default Personas;
