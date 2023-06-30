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
                'razonSocial' => 'Juan Perez',
                'dni' => '12345678',
                'genero' => 'Masculino',
                'fechaNacimiento' => '1999-02-12'
            ],
            [
                'razonSocial' => 'Maria Gomez',
                'dni' => '12345679',
                'genero' => 'Femenino',
                'fechaNacimiento' => '1960-01-03'
            ],
            [
                'razonSocial' => 'Pedro Gonzales',
                'dni' => '12345680',
                'genero' => 'Masculino',
                'fechaNacimiento' => '2000-08-14'
            ]
        ];
        DB :: table('personas')->insert($data);
    }
}
