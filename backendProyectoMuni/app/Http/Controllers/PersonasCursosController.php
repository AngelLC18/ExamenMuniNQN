<?php

namespace App\Http\Controllers;


use App\Http\Requests\StorePersonasCursosRequest;
use App\Http\Requests\UpdatePersonasCursosRequest;
use App\Models\PersonasCursos;
use App\Models\Persona;
use App\Models\Curso;

class PersonasCursosController extends Controller
{
    public function index()
    {
        $personasCursos = PersonasCursos::all();
        return response()->json($personasCursos);
    }

    public function store(StorePersonasCursosRequest $request)
    {
        //Variables para el id de personas y cursos
        $personaId = $request->input('persona_id');
        $cursoId = $request->input('curso_id');

        // Creo una variable para verificar si la persona esta inscripta a un curso con la misma modalidad
        $existeRelacion = PersonasCursos::where('persona_id', $personaId)
            ->whereHas('curso', function ($query) use ($cursoId) {
                $curso = Curso::find($cursoId);
                $query->where('modalidad_id', $curso->modalidad_id);
            })
            ->exists();

        if ($existeRelacion) {
            return response()->json(['error' => 'La persona ya está inscrita en un curso con la misma modalidad'], 400);
        }

        // Crear la nueva relación
        $personasCursos = new PersonasCursos();
        $personasCursos->fill($request->all());
        $personasCursos->save();

        $persona = Persona::with(['personasCursos' => ['curso']])->findOrFail($request->persona_id);

        return response()->json(['success' => 'Relación creada correctamente', 'persona' => $persona]);
    }


    public function show(PersonasCursos $personasCursos)
    {
        return response()->json(['status' => 'true', 'data' => $personasCursos]);

    }

    public function update(UpdatePersonasCursosRequest $request)
    {
        $persona = Persona::find($request->persona_id);
        $curso = Curso::find($request->curso_id);

        return response()->json(['success' => 'Relación actualizada correctamente']);
    }

    public function destroy(PersonasCursos $personasCursos)
    {
        $persona = Persona::find($personasCursos->persona_id);
        $curso = Curso::find($personasCursos->curso_id);
        return response()->json(['success' => 'Relación eliminada correctamente']);
    }
}