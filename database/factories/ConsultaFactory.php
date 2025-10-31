<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Consulta>
 */
class ConsultaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        return [
            'status' => $this->faker->randomElement(['agendada', 'finalizada', 'cancelada']),
            'observacao' => $this->faker->optional()->sentence(),
            'data_hora' => $this->faker->dateTimeBetween('first day of this month', 'first day of +3 months'),
        ];
    }
}
