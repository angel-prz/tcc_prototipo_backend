<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //user admin
        $this->call(UserAdminSeeder::class);
        //user
        $seedUser = new UserSeeder();
        $seedUser->run();

        //profissional
        $seedProfissional = new ProfissionalSeeder();
        $seedProfissional->run();
        //horarios
        $seedHorarios = new HorariosProfissionalSeeder();
        $seedHorarios->run();


        //paciente
        $seedPaciente = new PacienteSeeder();
        $seedPaciente->run();

        //aluno
        $seedAluno = new AlunoSeeder();
        $seedAluno->run();


        //funcionario
        $seedFuncionario = new FuncionarioSeeder();
        $seedFuncionario->run();

        //consulta
        $seedConsulta = new ConsultaSeeder();
        $seedConsulta->run();

        //dispensa
        $seedAlunoDispensa = new DispensaEducacaoFisicaSeeder();
        $seedAlunoDispensa->run();

        $this->call(UserTestSeeder::class);
    }
}
