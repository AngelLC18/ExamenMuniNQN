import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Muni = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    getAllPersonas();
    getPersonasLaravel();
  }, []);

  const getAllPersonas = async () => {
    let apiurl = 'https://weblogin.muninqn.gov.ar/api/Examen';
    try {
      const response = await axios.get(apiurl);
      console.log(response.data.value);
      setPersonas(response.data.value);
    } catch (error) {
      console.log(error);
    }
  };
  //Enviar personas a mi base de datos laravel

  const getPersonasLaravel = async () => {
    let apiurl = 'http://localhost:8000/api/personas';
    try {
      const response = await axios.get(apiurl);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleButton = async () => {
    const personasData = personas.map(persona => ({
      id: persona.id,
      razonSocial: persona.razonSocial,
      dni: persona.dni,
      genero: persona.genero.value,
      fechaNacimiento: persona.fechaNacimiento,
    }));
    console.log(personasData);
    let apiurl = 'http://localhost:8000/api/';
    try {
      const response = await axios.post(apiurl + 'personas', {
        personas: personasData,
      });
      console.log(response);
      alert('Personas enviadas a la base de datos');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='dark:text-gray-100 dark:bg-slate-900 w-auto min-h-screen'>
      <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md m-5'>
        <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
          <thead className='bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                ID
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Nombre
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Provincia
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Domicilio
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                DNI
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Género
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Fecha de Nacimiento
              </th>
            </tr>
          </thead>
          {personas.length > 0 ? (
            <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
              {personas.map(persona => (
                <tr className='hover:bg-gray-50' key={persona.id}>
                  <td className='px-6 py-4'>{persona.id}</td>
                  <td className='px-6 py-4'>{persona.razonSocial}</td>
                  <td className='px-6 py-4'>
                    {persona.codigoPostal.provincia}
                  </td>
                  <td className='px-6 py-4'>{persona.domicilio}</td>
                  <td className='px-6 py-4'>{persona.dni}</td>
                  <td className='px-6 py-4'>{persona.genero.value}</td>
                  <td className='px-6 py-4'>{persona.fechaNacimiento}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan='5' className='px-6 py-4'>
                  Cargando...
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
      <div className='flex gap-2 ml-5'>
        {/*Listar personas según el genero*/}
        <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md w-52 bg-white mb-2'>
          <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
            <thead className='bg-gray-50'>
              <tr>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Genero
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Cantidad
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
              <tr className='hover:bg-gray-50'>
                <td className='px-6 py-4'>Masculino</td>
                <td className='px-6 py-4'>
                  {
                    personas.filter(
                      persona => persona.genero.value === 'MASCULINO',
                    ).length
                  }
                </td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='px-6 py-4'>Femenino</td>
                <td className='px-6 py-4'>
                  {
                    personas.filter(
                      persona => persona.genero.value === 'FEMENINO',
                    ).length
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/*Listar personas según la edad*/}
        <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md w-52 bg-white mb-2'>
          <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
            <thead className='bg-gray-50'>
              <tr>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Edad
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Cantidad
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
              <tr className='hover:bg-gray-50'>
                <td className='px-6 py-4'>Menor a 18</td>
                <td className='px-6 py-4'>
                  {
                    personas.filter(
                      persona => persona.fechaNacimiento > '2005-06-1',
                    ).length
                  }
                </td>
              </tr>
              <tr className='hover:bg-gray-50'>
                <td className='px-6 py-4'>Mayores a 18</td>
                <td className='px-6 py-4'>
                  {
                    personas.filter(
                      persona => persona.fechaNacimiento < '2005-06-1',
                    ).length
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/*Registrar persona a mi base de datos laravel*/}
      <button className='rounded-3xl p-2 bg-slate-500' onClick={handleButton}>
        Enviar
      </button>
    </div>
  );
};

export default Muni;
