<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Http\Requests\HorarioProfissionalStoreRequest;
use App\Http\Requests\HorarioProfissionalUpdateRequest;
use App\Http\Resources\HorarioProfissionalCollectionResource;
use App\Http\Resources\HorarioProfissionalResource;
use App\Http\Resources\HorarioProfissionalStoredResource;
use App\Models\HorariosProfissional;
use Exception;
use Illuminate\Http\Request;


class HorariosProfissionalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new HorarioProfissionalCollectionResource(HorariosProfissional::all());
    }

    public function verificaTokenCan_AdmPro(Request $request)
    {
        if(!$request->user()->tokenCan('is-profissional') && !$request->user()->tokenCan('is-admin'))
        {
            throw new Exception("Acesso negado!!");
        }
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(HorarioProfissionalStoreRequest $request)
    {
        $this->verificaTokenCan_AdmPro($request);
        try
        {
            return new HorarioProfissionalStoredResource(
                HorariosProfissional::create($request->validated()));
        }
        catch(\Exception $e)
        {
            return $this->errorHandler('Erro ao criar Horario', $e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, HorariosProfissional $horariosProfissional)
    {
        $this->verificaTokenCan_AdmPro($request);

        return new HorarioProfissionalResource($horariosProfissional);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(HorarioProfissionalUpdateRequest $request, HorariosProfissional $horariosProfissional)
    {
        $this->verificaTokenCan_AdmPro($request);

        try
        {
            $horariosProfissional->update($request->validated());
            return (new HorarioProfissionalResource($horariosProfissional))->additional([
                'message' => 'Horario atualizado com sucesso!'
            ]);
        }
        catch(\Exception $e)
        {
            return $this->errorHandler('Erro ao atualizar Horario', $e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, HorariosProfissional $horariosProfissional)
    {
        $this->verificaTokenCan_AdmPro($request);

        try
        {
            $horariosProfissional->delete();
            return (new HorarioProfissionalResource($horariosProfissional))->additional([
                'message' => 'Horario excluido com sucesso!'
            ]);
        }
        catch(\Exception $e)
        {
            return $this->errorHandler('Erro na exclusao do horario', $e);
        }
    }
}
