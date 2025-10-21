<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Atendimento;
use App\Models\DocumentosAtestados;

class DocumentosAtestadosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $atendimentos = Atendimento::all();
        foreach ($atendimentos as $atendimento) {
            DocumentosAtestados::factory()->create([
                'atendimento_id' => $atendimento->id,
            ]);
        }
    }
}
