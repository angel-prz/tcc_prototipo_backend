<?php

namespace Database\Seeders;

use App\Models\HorariosProfissional;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Profissional;

class HorariosProfissionalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $profissionais = Profissional::all();

        foreach($profissionais as $profissional)
        {
            HorariosProfissional::factory()->create([
                'profissional_id' => $profissionais->random()->id,
            ]);
        }
    }
}
