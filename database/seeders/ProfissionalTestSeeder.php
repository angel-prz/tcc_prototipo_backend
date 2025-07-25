<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Profissional;
use Illuminate\Support\Facades\Hash;

class ProfissionalTestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $profissionalUser = User::factory()->create([
            'name' => 'Profissional',
            'email' => 'profissional@sys.com',
            'password' => Hash::make('123'),
            'tipo_usuario' => 'profissional',
        ]);

        $profissionalMedico = Profissional::factory()->create([
            'id' => $profissionalUser->id,
            'tipo_profissional' => 'medico',
        ]);
    }
}
