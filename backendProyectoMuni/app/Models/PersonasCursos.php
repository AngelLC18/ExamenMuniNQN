<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonasCursos extends Model
{
    use HasFactory;
    protected $fillable = ['persona_id', 'curso_id'];

    public function persona(){
        return $this->belongsTo(Persona::class);
    }
    public function curso(){
        return $this->belongsTo(Curso::class);
    }

}
