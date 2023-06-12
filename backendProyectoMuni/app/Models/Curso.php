<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Persona;
use App\Models\Modalidad;

class Curso extends Model
{
    use HasFactory;
    protected $fillable = ['nombre', 'descripcion', 'legajo', 'modalidad_id'];

    //uno a muchos
    public function modalidad(){
        return $this->belongsTo(Modalidad::class);
    }
    //muchos a muchos
    public function personas(){
        return $this->belongsToMany(Persona::class);
    }
    public function personasCursos(){
        return $this->hasMany(PersonasCursos::class);
    }
}
