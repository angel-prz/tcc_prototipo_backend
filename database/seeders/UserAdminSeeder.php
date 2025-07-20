<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin_pass = env('APP_ADMIN_PASS');
        if(empty($admin_pass))
            throw new \Exception("Erro: Admin Password!");
        User::factory()->create([
            'name' => 'Administrador',
            'email' => 'admin@sys.com',
            'password' => Hash::make($admin_pass),
            'tipo_usuario' => 'administrador',
        ]);
    }
}
