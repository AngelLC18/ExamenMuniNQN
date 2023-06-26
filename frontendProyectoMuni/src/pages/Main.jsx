import Footer from "../components/footer/Footer";
import NavbarV2 from "../components/navbar/Nav-barV2";

const Main = () => {
  return (
    <div className='dark:text-gray-100 bg-[url("https://descubres.com/wp-content/uploads/2020/07/IMG_20200710_142628-scaled.jpg")] bg-cover dark:bg-[url("https://guiamarex.com/store/contenido/neuquen/paseo-de-la-costa/paseo-de-la-costa-portada.jpg")] duration-100 w-full min-h-screen grid grid-rows-3'>
      <NavbarV2 />
      <main className="row-span-2 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold font-mono">Bienvenido</h1>
        <h2 className="text-3xl font-bold font-mono">A la pagina de Neuquen</h2>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
