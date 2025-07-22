<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Http\Requests\HorarioProfissionalStoreRequest;
use App\Http\Requests\HorarioProfissionalUpdateRequest;
use App\Http\Resources\HorarioProfissionalCollection;
use App\Http\Resources\HorarioProfissionalCollectionResource;
use App\Http\Resources\HorarioProfissionalResource;
use App\Http\Resources\HorarioProfissionalStoredResource;
use App\Models\HorariosProfissional;

class HorariosProfissionalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new HorarioProfissionalCollectionResource(HorariosProfissional::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(HorarioProfissionalStoreRequest $request)
    {
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
    public function show(HorariosProfissional $horariosProfissional)
    {
        return new HorarioProfissionalResource($horariosProfissional);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(HorarioProfissionalUpdateRequest $request, HorariosProfissional $horariosProfissional)
    {
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
    public function destroy(HorariosProfissional $horariosProfissional)
    {
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
