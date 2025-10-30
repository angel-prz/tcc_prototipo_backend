<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SaudeMedica>
 */
class SaudeMedicaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'alergias' => $this->faker->optional()->sentence(),
            'ulcera' => $this->faker->optional()->sentence(),
            'cirurgias' => $this->faker->optional()->sentence(),
            'tonturas_convulsoes_desmaios' => $this->faker->optional()->sentence(),
            'medicacao' => $this->faker->optional()->sentence(),
            'problema_cardiaco' => $this->faker->optional()->sentence(),
            'problema_coagulacao' => $this->faker->optional()->sentence(),
            'febre_reumatica' => $this->faker->optional()->sentence(),
            'psicopatias' => $this->faker->optional()->sentence(),
            'medico' => $this->faker->optional()->sentence(),
            'hepatite' => $this->faker->optional()->sentence(),
            'diabete' => $this->faker->optional()->sentence(),
            'problemas_respiratorios' => $this->faker->optional()->sentence(),
        ];
    }
}
