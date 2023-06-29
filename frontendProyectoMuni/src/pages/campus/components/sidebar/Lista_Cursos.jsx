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
        className="fixed bottom-0 right-0 m-5 bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-full  "
        onClick={() => setOpen(!open)}
      >
        <i className="fa-solid fa-chalkboard-user"></i>
      </button>
      <div
        className={`${
          open ? "w-2/4" : "w-0"
        }  dark:text-gray-100 dark:bg-slate-900 bg-sky-100 h-screen duration-300 left-0 z-10 overflow-x-auto  relative `}
      >
        <div className="overflow-hidden  rounded-lg border border-gray-200 shadow-md m-5">
          <table className="w-full border-collapse bg-white dark:bg-slate-800 text-left text-sm text-gray-500 dark:text-white ">
            <thead className="bg-gray-50 dark:bg-slate-700">
              <tr className="">
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
                  Descripción
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 font-medium text-gray-900 dark:text-white"
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
                  <td className="px-3 py-2">{curso.nombre}</td>
                  <td className="px-3 py-2">{curso.descripcion}</td>
                  <td className="px-3 py-2 text-center">{curso.legajo}</td>
                </tr>
              ))}
            </tbody>
            {/*Listar cursos según modalidad*/}
          </table>
          <table className="w-full border-collapse bg-white dark:bg-slate-800 text-left text-sm text-gray-500 dark:text-white">
            <thead className="bg-gray-50 dark:bg-slate-700  ">
              <tr className="">
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  Cursos Grupales
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  Cursos Individuales
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              <tr className="">
                <td className="px-3 py-2 border-r-2 ">
                  {cursos
                    .filter((curso) => curso.modalidad_id === 1)
                    .map((curso) => (
                      <div
                        className="hover:bg-gray-50 dark:hover:bg-slate-900"
                        key={curso.id}
                      >
                        {curso.nombre}
                      </div>
                    ))}
                </td>
                <td className="px-3 py-2 border-r-2">
                  {cursos
                    .filter((curso) => curso.modalidad_id === 2)
                    .map((curso) => (
                      <div
                        className="hover:bg-gray-50 dark:hover:bg-slate-900"
                        key={curso.id}
                      >
                        {curso.nombre}
                      </div>
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
