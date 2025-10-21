<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Consulta;
use App\Models\Atendimento;


class AtendimentoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $consultas = Consulta::all();

        foreach(range(1,50) as $i){
            Atendimento::factory()->create([
                'consulta_id' => $consultas->random()->id,
            ]);
        }
    }
}
