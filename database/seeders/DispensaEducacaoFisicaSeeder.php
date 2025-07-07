<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Consulta;
use App\Models\DispensaEducacaoFisica;

class DispensaEducacaoFisicaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        /* $consultas = Consulta::whereHas('paciente',
            fn($q) => $q->whereHas('pacientes', fn($q)=>$q->where('tipo_paciente', 'aluno')))->get(); */

        $consultas = Consulta::whereHas('paciente',
            function ($query) {    $query->where('tipo_paciente', 'aluno');})->get();

        foreach(range(1, 5) as $i)
        {
            DispensaEducacaoFisica::factory()->create([
                'aluno_id' => $consultas->random()->paciente_id,
                'consulta_id' => $consultas->random()->id,
            ]);
        }
    }
}
