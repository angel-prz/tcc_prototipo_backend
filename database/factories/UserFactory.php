<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'data_nascimento' => $this->faker->date('Y-m-d', '2005-01-01'),
            'sexo' => $this->faker->randomElement(['masculino', 'feminino', 'outro']),
            'numero_telefone' => $this->faker->phoneNumber(),
            'tipo_usuario' => $this->faker->randomElement(['paciente', 'profissionalSaude']),
            'remember_token' => Str::random(10),
        ];
    }
}
