<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Consulta;
use App\Models\Profissional;
use App\Models\Paciente;
use App\Models\User;

class ConsultaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //consultas
        $profissionais = User::where('tipo_usuario', 'profissional')->get();
        $pacientes = User::where('tipo_usuario', 'paciente')->get();

        // Cria 50 consultas aleatórias
        foreach (range(1, 50) as $i) {
            Consulta::factory()->create([
                'profissional_id' => $profissionais->random()->id,
                'paciente_id' => $pacientes->random()->id,
            ]);
        }
    }
}

