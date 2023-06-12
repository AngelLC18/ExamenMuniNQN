<?php

namespace App\Http\Controllers;

use App\Models\Modalidad;
use App\Http\Requests\StoreModalidadRequest;
use App\Http\Requests\UpdateModalidadRequest;

class ModalidadController extends Controller
{
    public function index()
    {
        return Modalidad::all(); //Devuelve todos los registros
    }

    public function store(StoreModalidadRequest $request)
    {
        $modalidad = new Modalidad(); //Creo un nuevo registro
        $modalidad->fill($request->all()); //Completo los campos con los datos del request
        $modalidad->save(); //Guardo el registro

        return $modalidad;
    }

    public function show(Modalidad $modalidad)
    {
        return $modalidad; //Devuelve el registro solicitado
    }

    public function update(UpdateModalidadRequest $request, Modalidad $modalidad)
    {
        $modalidad->fill($request->all()); //Completo los campos con los datos del request
        $modalidad->update(); //Actualizo el registro

        return $modalidad;
    }

    public function destroy(Modalidad $modalidad)
    {
        $modalidad->delete(); //Elimino el registro
        return response()->json(['success' => 'Modalidad eliminada correctamente']); //Devuelvo un mensaje de exito
        //Status 204, aprobo pero no duelve nada
    }
}
