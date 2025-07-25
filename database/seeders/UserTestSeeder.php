<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Paciente;
use App\Models\Profissional;
use Illuminate\Support\Facades\Hash;



class UserTestSeeder extends Seeder
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

        $profissionalUser = User::factory()->create([
            'name' => 'Profissional',
            'email' => 'profissional@sys.com',
            'password' => Hash::make('123'),
            'tipo_usuario' => 'profissional',
        ]);

        $profissionalMedico = Profissional::factory()->create([
            'id' => $profissionalUser->id,
            'tipo_profissional' => 'medico',
        ]);
    }
}
