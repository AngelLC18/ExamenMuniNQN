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
