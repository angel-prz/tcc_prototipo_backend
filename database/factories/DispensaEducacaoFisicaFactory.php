<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DispensaEducacaoFisica>
 */
class DispensaEducacaoFisicaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "turma" => fake()->word() . fake()->randomNumber(),
            "motivo" => fake()->paragraph(),
            "comeco" => fake()->date(),
            "fim" => fake()->date(),
            "numero_dias" => fake()->randomNumber()
        ];
    }
}
