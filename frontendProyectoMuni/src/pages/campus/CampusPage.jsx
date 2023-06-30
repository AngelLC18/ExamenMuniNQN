import Footer from "../../components/footer/Footer";
import NavbarV2 from "../../components/navbar/Nav-barV2";
import Lista_Cursos from "./components/sidebar/Lista_Cursos";
import Modals from "./components/FormcreateCurso/FormModal";
import CardsContainer from "./components/card/CardContainer";
import ListaPersonasCursos from "./components/personasCursos/ListaPersonasCursos";
const Campus = () => {
  return (
    <div className="w-full min-h-screen grid grid-rows-3 transition-all">
      <Lista_Cursos />
      <ListaPersonasCursos />
      <NavbarV2 />
      <main className="row-span-2 min-h-screen grid grid-cols-2 dark:bg-slate-900 bg-cyan-200">
        <div className="col-span-1 flex w-full justify-center items-center mt-14 ml-[50%]">
          <Modals />
        </div>
        <CardsContainer />
      </main>
      <Footer />
    </div>
  );
};

export default Campus;
