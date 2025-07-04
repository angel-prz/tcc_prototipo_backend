<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Paciente;
use App\Models\Aluno;


class AlunoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pacientes = Paciente::factory()->count(100)->create();

        foreach (range(1, 15) as $i)
        {
            Aluno::factory()->create([
                'id' => $pacientes->random()->id,
            ]);
        }
    }
}
