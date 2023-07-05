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
      <main className='row-span-2 min-h-screen grid grid-cols-2 bg-[url("https://descubres.com/wp-content/uploads/2020/07/IMG_20200710_142628-scaled.jpg")] bg-cover dark:bg-[url("https://guiamarex.com/store/contenido/neuquen/paseo-de-la-costa/paseo-de-la-costa-portada.jpg")] dark:bg-[73%] duration-100'>
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
