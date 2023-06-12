import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "../dark-mode/DarkMode";

const NavBar = () => {
  return (
    <header className="relative h-14 w-full flex justify-center ">
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between  items-center shadow w-11/12 rounded-2xl h-14 bg-sky-200 dark:text-gray-900 fixed top-0 dark:bg-slate-700 ">
        <div className="h-10 w-10">
          <DarkMode />
        </div>
        <div className="absolute left-10">
          <Link
            to="/"
            className="text-lg no-underline p-2 dark:text-white hover:rounded-3xl hover:bg-blue-200
            dark:hover:rounded-3xl dark:hover:bg-slate-400 dark:p-2"
          >
            Home
          </Link>
        </div>
        <div className="h-10 flex items-center relative">
          <Link
            to="/personas"
            className="text-lg no-underline p-2 dark:text-white hover:rounded-3xl hover:bg-blue-200
            dark:hover:rounded-3xl dark:hover:bg-slate-400 dark:p-2 "
          >
            Personas
          </Link>
          <Link
            to="/cursos"
            className="text-lg no-underline p-2 dark:text-white hover:rounded-3xl hover:bg-blue-200
            dark:hover:rounded-3xl dark:hover:bg-slate-400 dark:p-2"
          >
            Cursos
          </Link>
          <Link
            to="/personasCursos"
            className="text-lg no-underline p-2 dark:text-white hover:rounded-3xl hover:bg-blue-200
            dark:hover:rounded-3xl dark:hover:bg-slate-400 dark:p-2"
          >
            Personas x Cursos
          </Link>
          <Link
            to="/examen"
            className="text-lg no-underline p-2 dark:text-white hover:rounded-3xl hover:bg-blue-200
            dark:hover:rounded-3xl dark:hover:bg-slate-400 dark:p-2"
          >
            Examen
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
