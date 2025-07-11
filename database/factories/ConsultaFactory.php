<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
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
            'status' => $this->faker->randomElement(['agendada', 'realizada', 'cancelada']),
            'observacao' => $this->faker->optional()->sentence(),
            'data' => $this->faker->date(),
            'hora' => $this->faker->time(),
        ];
    }
}
