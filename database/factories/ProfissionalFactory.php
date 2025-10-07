<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Profissional>
 */
class ProfissionalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $tipo_profissional = $this->faker->randomElement(['medico', 'odontologista', 'enfermeiro', 'tecnico_enfermeiro', 'bolsista']);
        $sigla_conselho = match ($tipo_profissional)
        {
            'medico' => 'CRM',
            'odontologista' => 'CRO',
            'enfermeiro', 'tecnico_enfermeiro' => 'COREN',
            'bolsista' => null,
        };
        $uf_conselho = match ($tipo_profissional)
        {
            'medico' => fake()->stateAbbr(),
            'odontologista' => fake()->stateAbbr(),
            'enfermeiro', 'tecnico_enfermeiro' => fake()->stateAbbr(),
            'bolsista' => null,
        };

        return [
            'tipo_profissional' => $tipo_profissional,
            'sigla_conselho' => $sigla_conselho,
            'uf_conselho' => $uf_conselho,
            'numero_conselho' => $sigla_conselho ? fake()->unique()->numerify('##########') : null,
        ];
    }
}
