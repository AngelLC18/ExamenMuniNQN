import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { Apiurl } from "../../../../services/apirest";
import { useNavigate } from "react-router-dom";

const CardsContainer = () => {
  const [cursos, setCursos] = useState([]);
  useEffect(() => {
    getAllCursos();
  }, []);
  const getAllCursos = async () => {
    const response = await axios.get(Apiurl + "cursos");
    setCursos(response.data);
    console.log(response.data);
  };
  const navigate = useNavigate();
  const cursosIndividuales = cursos.filter((curso) => curso.modalidad_id === 2);
  const cursosGrupales = cursos.filter((curso) => curso.modalidad_id === 1);

  const handleCardClick = (curso) => {

    navigate(`/personasCursos/${curso.id}`);
  };

  return (
    <div className="col-span-2 grid grid-rows-2 w-full gap-3 p-2 place-content-center">
      <div className="flex flex-col row-span-1 bg-sky-200 dark:bg-sky-950 pl-5  pt-7 pr-5 pb-4 md:pl-4 md:pt-7 md:pr-4 m-0 rounded-lg  w-[350px] items-center md:w-auto relative ">
        <h2 className=" dark:text-white absolute top-0 ">
          Grupos Individuales
        </h2>
        <div className="flex flex-row gap-4 overflow-x-auto  w-[330px] md:w-[1021px]">
          {cursosIndividuales.map((curso) => (
            <Card key={curso.id} h1={curso.nombre} p={curso.descripcion} curso={curso} onClick={handleCardClick} />
          ))}
        </div>
      </div>
      <div className="flex flex-col row-span-2 bg-sky-200 dark:bg-sky-950 pl-5  pt-7 pr-5 pb-4 md:pl-4 md:pt-7 md:pr-4 md:m-auto rounded-lg  w-[350px] items-center md:w-auto relative  ">
        <h2 className="dark:text-white absolute top-0 ">Grupos grupales</h2>
        <div className="flex flex-row gap-4 overflow-x-auto w-[330px] md:w-[1021px] ">
          {cursosGrupales.map((curso) => (
            <Card key={curso.id} h1={curso.nombre} p={curso.descripcion} curso={curso} onClick={handleCardClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
