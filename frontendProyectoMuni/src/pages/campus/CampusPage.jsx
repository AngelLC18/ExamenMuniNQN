import Footer from "../../components/footer/Footer";
import Card from "./components/card/Card";
import NavbarV2 from "../../components/navbar/Nav-barV2";
import { Link } from "react-router-dom";
import Lista_Cursos from "./components/sidebar/Lista_Cursos";
const Campus = () => {
  return (
    <div className="w-full min-h-screen grid grid-rows-3 transition-all">
      <Lista_Cursos />
      <NavbarV2 />
      <main className="row-span-2 min-h-screen grid grid-cols-2 dark:bg-slate-900 bg-cyan-200">
        <div className="col-span-1 flex text-center ">
          <Link
            to="/campus/create"
            className="col-span-1 text-3xl mt-16 ml-4 font-bold font-mono text-center dark:text-white"
          >
            Crear un curso
          </Link>
        </div>
        <div className="col-span-2 grid grid-rows-2 w-full gap-3 p-2 place-content-center">
          <div className="row-span-1 bg-sky-200 dark:bg-sky-950 flex flex-col m-auto md:m-0 p-4 rounded-lg  md:flex md:flex-row gap-4 md:overflow-x-auto items-center scrollbar">
            <h2 className="text-center dark:text-white ">
              Grupos Individuales
            </h2>
            <Card
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
              alt="react"
              h1="React"
              p="React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario."
            />
            <Card
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
              alt="vue"
              h1="Vue"
              p="Vue.js es un framework de JavaScript de código abierto para construir interfaces de usuario y aplicaciones de una sola página."
            />
            <Card
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
              alt="angular"
              h1="Angular"
              p="Angular es un framework de código abierto para crear aplicaciones de desarrollo de aplicaciones web, mantenido por Google."
            />
            <Card
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Redux.png/1200px-Redux.png"
              alt="redux"
              h1="Redux"
              p="Redux es una biblioteca de JavaScript de código abierto para administrar el estado de su aplicación."
            />
          </div>
          <div className=" row-span-2 bg-sky-200 dark:bg-sky-950 flex flex-col pl-4 pt-4 pr-4 pb-3 m-auto md:m-0 rounded-lg  md:flex-row gap-4 md:overflow-x-auto items-center scrollbar ">
            <h2 className="text-center dark:text-white">Grupos grupales</h2>

            <Card
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
              alt="react native"
              h1="React Native"
              p="React Native es un marco de aplicación móvil de código abierto creado por Facebook, Inc."
            />
            <Card
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              alt="javascript"
              h1="JavaScript"
              p="JavaScript es un lenguaje de programación que se utiliza principalmente para crear páginas web dinámicas."
            />
            <Card
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png"
              alt="graphql"
              h1="GraphQL"
              p="GraphQL es un lenguaje de consulta y un tiempo de ejecución del lado del servidor para consultar datos."
            />
            <Card
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png"
              alt="sass"
              h1="Sass"
              p="Sass es un lenguaje de hoja de estilos compilado en cascada que se interpreta o se compila en CSS."
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Campus;
