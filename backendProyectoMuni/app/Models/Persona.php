<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Curso;

class Persona extends Model
{
    use HasFactory;
    protected $table = 'personas'; // Nombre de la tabla en la base de datos
    protected $fillable = [
        'razonSocial',
        'dni',
        'genero',
        'fechaNacimiento',
    ];

    public function cursos()
    {
        return $this->belongsToMany(Curso::class);
    }
    public function personasCursos(){
        return $this->hasMany(PersonasCursos::class);
    }
}
