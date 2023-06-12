<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use App\Http\Requests\StorePersona;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class PersonaController extends Controller
{
    public function index()
    {
        return Persona::all();
    }

    public function store(StorePersona $request)
    {
        $persona = new Persona();
        $persona->fill($request->all());
        $persona->save();

        return $persona;
    }

    /*
        public function store(Request $request)
        {
            $personasData = $request -> input('personas');
            /*$validator = Validator::make($personasData, [
                '*.id' => 'required|integer',
                '*.razonSocial' => 'required|string',
                '*.dni' => 'required|string',
                '*.genero' => 'required|string',
                '*.fechaNacimiento' => 'required|date',
            ]); // Verificar si la validación falla
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()],400);
            }

            foreach ($personasData as $persona){
                $id = $persona['id'];
                $razonSocial = $persona ['razonSocial'];
                $dni = $persona ['dni'];
                $genero = $persona['genero'];
                $fechaNacimiento = $persona['fechaNacimiento'];
            }
            return response()->json(['message' => 'Personas guardadas correctamente'],200);
        }
    */

    public function show(Persona $persona)
    {
        //function show (Persona $persona)
        //$persona = Persona::find($id);
        return response()->json(['status' => 'true', 'data' => $persona]);
    }

    public function update(StorePersona $request, Persona $persona)
    {
        $persona ->fill($request->all());
        $persona -> update();

        return $persona;
    }

    public function destroy(Persona $persona)
    {
        $persona->delete();
        return response()->json(['success' => 'Persona eliminada correctamente']);
        //Status 204, aprobo pero no duelve nada
    }
}
