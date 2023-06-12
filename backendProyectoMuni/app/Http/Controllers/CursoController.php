<?php

namespace App\Http\Controllers;

use App\Models\Curso;
use App\Http\Requests\StoreCursoRequest;
use App\Http\Requests\UpdateCursoRequest;

class CursoController extends Controller
{
    public function index()
    {
        return response()->json(Curso::all());
    }

    public function store(StoreCursoRequest $request)
    {
        $curso = new Curso();
        $curso->fill($request->all());
        $curso->save();

        return $curso;
    }

    public function show(Curso $curso)
    {
        return response()->json(['status' => 'true', 'data' => $curso]);
    }

    public function update(UpdateCursoRequest $request, Curso $curso)
    {
        $curso->fill($request->all());
        $curso->update();

        return $curso;
    }

    public function destroy(Curso $curso)
    {
        $curso->delete();
        return response()->json(['success' => 'Curso eliminado correctamente']);
    }
}
