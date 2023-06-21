import ResponsiveAppBar from "../../components/navbar/AppBar";
import Footer from "../../components/footer/Footer";
import Card from "./components/card/Card";
const Campus = () => {
  return (
    <div className=" min-w-screen max-h-screen grid grid-rows-3 ">
      <ResponsiveAppBar />
      <main className="w-full h-screen bg-slate-100 dark:bg-slate-950">
        <h1 className="dark:text-white text-[30px] font-bold p-2">Campus</h1>
        <h2 className="dark:text-white text-base font-bold ml-6 mb-2">
          {" "}
          Cursos
        </h2>
        <div className="w-full max-h-full flex flex-col flex-wrap items-center justify-center sm:flex sm:flex-row gap-2">
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
      </main>
      <Footer />
    </div>
  );
};

export default Campus;
