<?php

namespace Database\Seeders;

use App\Models\Paciente;
use App\Models\SaudeMedica;
use App\Models\SaudeOdontologica;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class PacienteTestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pacienteAlunoUser = User::factory()->create([
            'name' => 'PacienteAluno',
            'email' => 'pacienteAluno@sys.com',
            'password' => Hash::make('123'),
            'tipo_usuario' => 'paciente',
        ]);

        $pacienteAluno = Paciente::factory()->create([
            'id' => $pacienteAlunoUser->id,
            'tipo_paciente' => 'aluno',
        ]);

        $pacienteFuncionarioUser = User::factory()->create([
            'name' => 'PacienteFuncionario',
            'email' => 'pacienteFuncionario@sys.com',
            'password' => Hash::make('123'),
            'tipo_usuario' => 'paciente',
        ]);

        $pacienteFuncionario = Paciente::factory()->create([
            'id' => $pacienteFuncionarioUser->id,
            'tipo_paciente' => 'funcionario',
        ]);

        SaudeMedica::factory()->create([
            'paciente_id' => $pacienteAlunoUser->id,
        ]);

        SaudeOdontologica::factory()->create([
            'paciente_id' => $pacienteAlunoUser->id,
        ]);

        SaudeMedica::factory()->create([
            'paciente_id' => $pacienteFuncionarioUser->id,
        ]);

        SaudeOdontologica::factory()->create([
            'paciente_id' => $pacienteFuncionarioUser->id,
        ]);
    }
}
