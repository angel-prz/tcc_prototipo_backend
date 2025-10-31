<?php

namespace Database\Seeders;

use App\Models\Paciente;
use App\Models\SaudeOdontologica;
use Illuminate\Database\Seeder;

class SaudeOdontologicaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pacientes = Paciente::all();

        foreach ($pacientes as $paciente) {
            SaudeOdontologica::factory()->create([
                'paciente_id' => $paciente->id,
            ]);
        }
    }
}
