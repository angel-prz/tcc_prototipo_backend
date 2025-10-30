<?php

namespace Database\Seeders;

use App\Models\ExameProcedimentos;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Atendimento;

class ExameProcedimentosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $atendimentos = Atendimento::all();
        foreach ($atendimentos as $atendimento) {
            ExameProcedimentos::factory()->create([
                'atendimento_id' => $atendimento->id,
            ]);
        }
    }
}
