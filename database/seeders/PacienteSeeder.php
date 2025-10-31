<?php

namespace Database\Seeders;

use App\Models\Paciente;
use App\Models\SaudeMedica;
use App\Models\SaudeOdontologica;
use App\Models\User;
use Illuminate\Database\Seeder;

class PacienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pacientes = User::where('tipo_usuario', 'paciente')->get();

        foreach ($pacientes as $paciente) {
            Paciente::factory()->create([
                'id' => $paciente->id,
            ]);

            SaudeMedica::factory()->create([
                'paciente_id' => $paciente->id,
            ]);

            SaudeOdontologica::factory()->create([
                'paciente_id' => $paciente->id,
            ]);
        }

        echo 'Pacientes: '.$pacientes->count()."\n";
    }
}
