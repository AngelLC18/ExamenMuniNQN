<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PersonaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'nombre' => 'Juan',
                'apellido' => 'Perez',
                'dni' => '12345678',
                'genero' => 'Masculino',
                'edad' => '30'
            ],
            [
                'nombre' => 'Maria',
                'apellido' => 'Gomez',
                'dni' => '12345679',
                'genero' => 'Femenino',
                'edad' => '25'
            ],
            [
                'nombre' => 'Pedro',
                'apellido' => 'Gonzalez',
                'dni' => '12345680',
                'genero' => 'Masculino',
                'edad' => '35'
            ]
        ];
        DB :: table('personas')->insert($data);
    }
}
