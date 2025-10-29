<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\PacienteStoreRequest;
use App\Http\Requests\PacienteUpdateRequest;
use App\Http\Resources\PacienteCollectionResource;
use App\Http\Resources\PacienteResource;
use App\Http\Resources\PacienteStoredResource;
use App\Models\Aluno;
use App\Models\Funcionario;
use App\Models\Paciente;
use App\Models\User;

class PacienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new PacienteCollectionResource(Paciente::with(['user', 'aluno', 'funcionario'])
            ->where(function ($query) {
                $query->whereHas('aluno')
                    ->orWhereHas('funcionario');
            })
            ->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    /* public function store(PacienteStoreRequest $request)
    {
        try {
            return new PacienteStoredResource(Paciente::create($request->validated()));
        } catch (\Exception $e) {
            return $this->errorHandler('Erro ao criar Paciente',$e);
        }
    } */
    public function store(PacienteStoreRequest $request)
    {
        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'cpf' => $request->cpf,
                'data_nascimento' => $request->data_nascimento,
                'sexo' => $request->sexo,
                'fone_celular' => $request->fone_celular,
                'fone_fixo' => $request->fone_fixo,
                'tipo_usuario' => 'paciente',
            ]);

            $paciente = Paciente::create([
                'id' => $user->id,
                'tipo_paciente' => $request->tipo_paciente,
            ]);

            if ($request->tipo_paciente === 'aluno') {
                Aluno::create([
                    'id' => $paciente->id,
                    'matricula' => $request->matricula,
                    'campus' => $request->campus,
                    'curso' => $request->curso,
                    'turma' => $request->turma,
                    'semestre' => $request->semestre,
                    'ano' => $request->ano,
                    'fone_responsavel' => $request->fone_responsavel,
                ]);
            } elseif ($request->tipo_paciente === 'funcionario') {
                Funcionario::create([
                    'id' => $paciente->id,
                    'tipo_funcionario' => $request->tipo_funcionario,
                    'cargo' => $request->cargo,
                    'setor' => $request->setor,
                    'ramal' => $request->ramal,
                    'turno' => $request->turno,
                ]);
            }

            $paciente->load(['user', 'aluno', 'funcionario']);

            return new PacienteStoredResource($paciente);

        } catch (\Exception $e) {
            return $this->errorHandler('Erro ao criar Usuário', $e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Paciente $paciente)
    {
        return new PacienteResource($paciente::with(['user', 'aluno', 'funcionario'])
            ->where(function ($query) {
                $query->whereHas('aluno')
                    ->orWhereHas('funcionario');
            })
            ->get());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PacienteUpdateRequest $request, Paciente $Paciente)
    {
        try {
            $Paciente->update($request->validated());

            return new PacienteResource($Paciente);
        } catch (\Exception $e) {
            return $this->errorHandler('Erro ao atualizar Paciente', $e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Paciente $Paciente)
    {
        try {
            $Paciente->delete();

            return (new PacienteResource($Paciente))->additional([
                'message' => 'Paciente deletado com sucesso!',
            ]);
        } catch (\Exception $e) {
            return $this->errorHandler('Erro ao atualizar Paciente', $e);
        }
    }

    public function showConsultas(Paciente $Paciente)
    {
        return new PacienteResource($Paciente->load(['user', 'consultas', 'consultas.profissional.user']));
    }
}
