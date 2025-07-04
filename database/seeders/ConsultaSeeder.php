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
        $profissionais = Profissional::factory()->count(12)->create();
        $pacientes = Paciente::factory()->count(100)->create();

        // Cria 20 consultas aleatórias
        foreach (range(1, 30) as $i) {
            Consulta::factory()->create([
                'profissional_id' => $profissionais->random()->id,
                'paciente_id' => $pacientes->random()->id,
            ]);
        }
    }
}

