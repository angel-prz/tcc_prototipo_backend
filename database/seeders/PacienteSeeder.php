<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class PacienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pacientes = User::where('tipo_paciente', 'paciente');

        foreach ($pacientes as $paciente)
        {
            Paciente::factory()->create([
                'id' => $paciente->random()->id,
            ])
        }
    }
}
