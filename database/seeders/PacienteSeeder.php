<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Paciente;

class PacienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pacientes = User::where('tipo_usuario', 'paciente')->get();


        foreach ($pacientes as $paciente)
        {
            Paciente::factory()->create([
                'id' => $paciente->id,
            ]);
        }

        echo "Pacientes: " . $pacientes->count() . "\n";
    }
}
