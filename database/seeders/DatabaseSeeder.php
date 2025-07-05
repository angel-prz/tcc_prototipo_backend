<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Consulta;
use App\Models\Aluno;
use App\Models\DispensaEducacaoFisica;
use Database\Factories\DispensaEducacaoFisicaFactory;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //user
        $seedUser = new UserSeeder();
        $seedUser->run();
        
        //profissional
        //horarios
        

        //paciente
       

        //aluno
        $seedAluno = new AlunoSeeder();
        $seedAluno->run();
        //dispensa
        

        //funcionario
        $seedFuncionario = new FuncionarioSeeder();
        $seedFuncionario->run();

        //consulta
        $seedConsulta = new ConsultaSeeder();
        $seedConsulta->run();
        
    }
}
