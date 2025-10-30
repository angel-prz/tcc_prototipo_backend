<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Aluno>
 */
class AlunoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // TEMPORARIO
        // REFAZER COM FILE STORAGE
        // https://laravel.com/docs/12.x/filesystem#main-content
        $campi = [
            'Reitoria',
            'Campus Bagé',
            'Câmpus Camaquã',
            'Campus Charqueadas',
            'Campus Gravataí',
            'Campus Jaguarão',
            'Campus Lajeado',
            'Campus Novo Hamburgo',
            'Campus Passo Fundo',
            'Campus Pelotas',
            'Campus Pelotas - Visconde da Graça',
            'Campus Santana do Livramento',
            'Campus Sapiranga',
            'Campus Sapucaia do Sul',
            'Campus Venâncio Aires',
            'Centro de Referência',
        ];

        $cursos = [
            'Alimentação Escolar',
            'Design de Interiores',
            'Design Gráfico',
            'Edificações',
            'Edificações Integrado Semestral',
            'Edificações Subsequente Semestral',
            'Eletromecânica',
            'Eletromecânica Subsequente',
            'Eletrônica',
            'Eletrotécnica',
            'Infraestrutura Escolar',
            'Mecânica',
            'Multimeios Didáticos',
            'Química',
            'Secretaria Escolar',
            'Telecomunicações Subsequente Semestral',
            'Graduação',
            'Bacharelado em Administração',
            'Design',
            'Engenharia de Produção',
            'Engenharia Elétrica',
            'Engenharia Química',
            'Formação Pedagógica para Graduados não Licenciados',
            'Gestão Ambiental',
            'Licenciatura em Computação',
            'Licenciatura em Letras - Língua Portuguesa e Língua Inglesa e suas Respectivas Literaturas',
            'Pedagogia',
            'Saneamento Ambiental',
            'Sistemas para Internet',
            'Sistemas para Internet (EaD)',
            'Educação: Espaços e Possibilidades para Educação Continuada',
            'Especialização em Esporte Escolar',
            'Linguagens Verbais e Visuais',
            'Mestrado Profissional e Doutorado Profissional em Educação e Tecnologia',
            'Mestrado Profissional em Engenharia e Ciências Ambientais',
        ];


        return [
            'turma' => fake()->word() . fake()->randomNumber(),
            'matricula' => fake()->unique()->numerify('##########'),
            'campus' => $this->faker->randomElement($campi),
            'curso' => $this->faker->randomElement($cursos),
            'semestre' => fake()->randomDigit(),
            'ano' => fake()->year(),
            'fone_responsavel' => $this->faker->numerify('(##) ####-####'),
        ];
    }
}
