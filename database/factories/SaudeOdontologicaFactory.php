<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SaudeOdontologica>
 */
class SaudeOdontologicaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'gengivite' => $this->faker->optional()->sentence(),
            'outras_patologias' => $this->faker->optional()->sentence(),
            'periodontite' => $this->faker->optional()->sentence(),
        ];
    }
}
