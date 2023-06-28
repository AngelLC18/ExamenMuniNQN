import axios from "axios";
import { useState, useEffect } from "react";

const Lista_Cursos = () => {
  const [open, setOpen] = useState(false);
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    getAllcursos();
  }, []);

  const getAllcursos = async () => {
    let apiurl = "http://localhost:8000/api/cursos";
    try {
      const response = await axios.get(apiurl);
      console.log(response.data);
      setCursos(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="absolute z-30">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 absolute top-16  left-[620px] transition-all "
        onClick={() => setOpen(!open)}
      >
        Button
      </button>
      <div
        className={`${
          open ? "w-[500px]" : "w-0"
        }  dark:text-gray-100 dark:bg-slate-900 bg-sky-400 h-screen duration-300 left-0 z-10 overflow-x-auto `}
      >
        <div className="overflow-hidden  rounded-lg border border-gray-200 shadow-md m-5">
          <table className="w-full border-collapse bg-white dark:bg-slate-800 text-left text-sm text-gray-500 dark:text-white ">
            <thead className="bg-gray-50 dark:bg-slate-700">
              <tr className="">
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  Nombre
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  Descripción
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  Legajo
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {cursos.map((curso) => (
                <tr
                  className="hover:bg-gray-50 dark:hover:bg-slate-900"
                  key={curso.id}
                >
                  <td className="px-6 py-4">{curso.id}</td>
                  <td className="px-6 py-4">{curso.nombre}</td>
                  <td className="px-6 py-4">{curso.descripcion}</td>
                  <td className="px-6 py-4">{curso.legajo}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr className="hover:bg-gray-50">
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Cursos Grupales
                </th>
                <th className="px-6 py-4 font-medium text-gray-900">
                  Cursos Individuales
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  {cursos
                    .filter((curso) => curso.modalidad_id === 1)
                    .map((curso) => (
                      <div key={curso.id}>{curso.nombre}</div>
                    ))}
                </td>
                <td className="px-6 py-4">
                  {cursos
                    .filter((curso) => curso.modalidad_id === 2)
                    .map((curso) => (
                      <div key={curso.id}>{curso.nombre}</div>
                    ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Lista_Cursos;
