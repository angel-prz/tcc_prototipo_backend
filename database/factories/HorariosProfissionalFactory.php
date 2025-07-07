<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Profissional;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HorariosProfissional>
 */
class HorariosProfissionalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $profissionais = Profissional::all()->pluck('id')->toArray();

        return [
            'profissional_id' => $this->faker->randomElement($profissionais),
            'dia_semana' => $this->faker->randomElement(['segunda', 'terca', 'quarta', 'quinta', 'sexta']),
            'entrada' => $this->faker->time('H:i'),
            'saida' => $this->faker->time('H:i'),
        ];
    }
}
