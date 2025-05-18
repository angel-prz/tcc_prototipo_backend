<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Consulta;
use App\Models\User;

class ConsultaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $profissionais = User::factory()->count(5)->create();
        $pacientes = User::factory()->count(10)->create();

        // Cria 20 consultas aleatórias
        foreach (range(1, 20) as $i) {
            Consulta::factory()->create([
                'id_profissional' => $profissionais->random()->id,
                'id_paciente' => $pacientes->random()->id,
            ]);
        }
    }
}
