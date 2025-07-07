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
        $alunos = Paciente::where('tipo_paciente', 'aluno')->get();

        foreach ($alunos as $aluno)
        {
            Aluno::factory()->create([
                'id' => $aluno->id,
            ]);
        }
    }
}
