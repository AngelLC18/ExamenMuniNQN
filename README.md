﻿# ExamenMuniNQN
Ejercicio:
	Se debe realizar una petición a un endpoint el cual le ortogara información sobre 100 personas en una DB.
	Endpoint: https://weblogin.muninqn.gov.ar/api/Examen
	
	Una vez obtenidos los datos, se necesita que realice las siguientes tarea:
	
	Crear un CRUD o ABM web que permita inscribir personas a cursos de capacitación, con las siguientes restricciones y requerimientos:

	Para las personas se pide registrar su nombre, apellido, DNI, género y edad. No puede haber personas duplicadas en el sistema (Insertar los datos obtenidos de la api).

	De los cursos se sabe que poseen un legajo, un nombre que le permite a un usuario poder reconocerlo, una descripción que permite conocer el detalle del mismo y su modalidad, la cual puede ser grupal o individual.

	Un curso no puede contener 2 modalidades diferentes, es decir, es grupal o es individual. Tampoco puede haber cursos duplicados.

	Una persona se puede inscribir a 1 solo curso por modalidad.

	Emitir un reporte por pantalla de personas por curso.

		* Listar por separado los cursos individuales y grupales, mostrar los nombres en orden de la lista creada, a un costado de la misma, solo que el nombre que se muestre debe estar en grande, cambiar cada 10-15 segundos
		(si es posible animar tanto cuando desaparece el nombre cuando aparece el próximo) y debe corresponder con el nombre en la lista.

		*Obtener cantidad de mujeres y hombres.
		*Obtener cantidad de menos y mayores de edad

	Diagrama:
	![Diagrama del proyecto](https://github.com/AngelLC18/ProyectoMuniNQN/blob/main/Images/DiagramaProyectoMuni.png?raw=true)
