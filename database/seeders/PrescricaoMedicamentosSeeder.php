<?php

namespace Database\Seeders;

use App\Models\PrescricaoMedicamentos;
use App\Models\Atendimento;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PrescricaoMedicamentosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $atendimentos = Atendimento::all();
        foreach ($atendimentos as $atendimento) {
            PrescricaoMedicamentos::factory()->create([
                'atendimento_id' => $atendimento->id,
            ]);
        }
    }
}
