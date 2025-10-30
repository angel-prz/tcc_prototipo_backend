<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PrescricaoMedicamentos>
 */
class PrescricaoMedicamentosFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'medicamento' => $this->faker->word(),
            'dosagem' => $this->faker->randomElement(['250mg', '500mg', '1g']),
            'frequencia' => $this->faker->randomElement(['uma vez ao dia', 'duas vezes ao dia', 'três vezes ao dia']),
            'duracao' => $this->faker->numberBetween(1, 30) . ' dias',
        ];
    }
}
