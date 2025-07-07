<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Funcionario>
 */
class FuncionarioFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'tipo_funcionario' => $this->faker->randomElement(['terceirizado','docente', 'tecnico_administrativo']),
            'cargo' => $this->faker->jobTitle(),
            'setor' => $this->faker->word(),
            'ramal' => $this->faker->randomNumber(),
            'turno' => $this->faker->randomElement(['matutino', 'vespertino', 'noturno']),
        ];
    }
}
