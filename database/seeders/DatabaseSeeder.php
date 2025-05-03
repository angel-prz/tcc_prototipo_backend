<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'email_verified_at' => now(),
            'data_nascimento' => '1990-01-01',
            'sexo' => 'masculino',
            'numero_telefone' => '555-1234',
            'tipo_usuario' => 'profissionalSaude',
            'remember_token' => Str::random(10),
        ]);
    }
}
