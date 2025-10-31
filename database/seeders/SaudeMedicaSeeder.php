<?php

namespace Database\Seeders;

use App\Models\Paciente;
use App\Models\SaudeMedica;
use Illuminate\Database\Seeder;

class SaudeMedicaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pacientes = Paciente::all();

        foreach ($pacientes as $paciente) {
            SaudeMedica::factory()->create([
                'paciente_id' => $paciente->id,
            ]);
        }
    }
}
