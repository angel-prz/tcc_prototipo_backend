<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Paciente;
use App\Models\Funcionario;

class FuncionarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $funcionarios = Paciente::where('tipo_paciente', 'funcionario')->get();

        foreach($funcionarios as $funcionario)
        {
            Funcionario::factory()->create([
                'id' => $funcionario->id,
            ]);
        }
    }
}
