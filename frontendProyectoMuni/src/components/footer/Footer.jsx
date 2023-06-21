import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-white 
           shadow dark:bg-gray-900 w-full"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://www.neuquencapital.gov.ar/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="https://chat.muninqn.gov.ar/logo.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Examen
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/ " className="mr-4 hover:underline md:mr-6">
                {" "}
                Examen
              </Link>
            </li>
            <Link to="/personas " className="mr-4 hover:underline md:mr-6">
              {" "}
              Personas
            </Link>
            <Link to="/cursos " className="mr-4 hover:underline md:mr-6">
              {" "}
              Cursos
            </Link>
            <Link
              to="/personasCursos "
              className="mr-4 hover:underline md:mr-6"
            >
              {" "}
              PersonasXCursos
            </Link>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://github.com/AngelLC18/ProyectoMuniNQN"
            className="hover:underline"
          >
            Muni Examen EPET 20™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
