import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CargarPersonas = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    getAllPersonas();
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

  const handleButton = async () => {
    const personasData = personas.map(persona => ({
      id: persona.id,
      razonSocial: persona.razonSocial,
      dni: persona.dni,
      genero: persona.genero.value,
      fechaNacimiento: persona.fechaNacimiento,
    }));
    console.log(personasData);

    let apiurl = 'http://localhost:8000/api/personas';

    try {
      const response = await axios.post(apiurl, personasData);
      console.log(response);
      alert('Personas enviadas a la base de datos');
    } catch (error) {
      console.log(error);
      alert('Error al cargar las personas');
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
                Razón Social
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
                  No hay personas
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
      <div className='flex justify-center mt-2'>
        <button onClick={handleButton} className='rounded-3xl p-2 bg-slate-500'>
          Cargar Personas
        </button>
      </div>
      <form>
        <select>
          <option value=''>Seleccione una persona</option>
          {personas.map(persona => (
            <option key={persona.id} value={persona.id}>
              {persona.razonSocial}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default CargarPersonas;
