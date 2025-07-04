<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Consulta;


class DispensaEducacaoFisicaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $consultas = Consulta::all();

        foreach(range(1, 10) as $i)
        {
            
        }
    }
}
