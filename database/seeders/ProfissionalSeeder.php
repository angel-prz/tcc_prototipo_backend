<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Profissional;

class ProfissionalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $profissionais = User::where('tipo_usuario', 'profissional')->get();

        foreach($profissionais as $profissional)
        {
            Profissional::factory()->create([
                'id' => $profissional->id,
            ]);
        }
        echo "Profissionais: " . $profissionais->count() . "\n";
    }
}
