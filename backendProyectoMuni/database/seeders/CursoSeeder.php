<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CursoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'nombre' => 'Curso de Laravel',
                'descripcion' => 'Curso de Laravel',
                'legajo' => '123456',
            ],
            [
                'nombre' => 'Curso de PHP',
                'descripcion' => 'Curso de PHP',
                'legajo' => '123457',
            ],
            [
                'nombre' => 'Curso de JavaScript',
                'descripcion' => 'Curso de JavaScript',
                'legajo' => '123458',
            ]
        ];
        DB :: table('cursos')->insert($data);
    }
}
