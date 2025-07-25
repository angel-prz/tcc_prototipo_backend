<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Paciente;


class PacienteTestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pacienteUser = User::factory()->create([
            'name' => 'Paciente',
            'email' => 'paciente@sys.com',
            'password' => Hash::make('123'),
            'tipo_usuario' => 'paciente',
        ]);

        $pacienteAluno = Paciente::factory()->create([
            'id' => $pacienteUser->id,
            'tipo_paciente' => 'aluno',
        ]);
    }
}
