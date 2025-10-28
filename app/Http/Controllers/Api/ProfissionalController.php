<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Models\Profissional;
use App\Http\Resources\ProfissionalResource;
use App\Http\Resources\ProfissionalCollectionResource;
use App\Http\Resources\ProfissionalStoredResource;
use App\Http\Requests\ProfissionalStoreRequest;
use App\Http\Requests\ProfissionalUpdateRequest;


class ProfissionalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //para pegar o nome na table usuario (estudar jeito melhor do que isso?)
        return new ProfissionalCollectionResource(
            Profissional::whereHas('user', function ($query) {
            $query->where('tipo_usuario', 'profissional');
        })
        ->with('user')
        ->get()
        );
    }

    public function show(Profissional $profissional)
    {
        return new ProfissionalResource($profissional);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProfissionalStoreRequest $request)
    {
        try {
            return new ProfissionalStoredResource(Profissional::create($request->validated()));
        } catch (\Exception $e) {
            return $this->errorHandler('Erro ao criar Profissional',$e);
        }
    }

     /**
     * Update the specified resource in storage.
     */

    public function update(ProfissionalUpdateRequest $request, Profissional $Profissional)
    {
        try {
            $Profissional->update($request->validated());
            return new ProfissionalResource($Profissional);
        } catch (\Exception $e) {
            return $this->errorHandler('Erro ao atualizar Profissional',$e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Profissional $Profissional)
    {
        try {
            $Profissional->delete();
            return (new ProfissionalResource($Profissional))->additional([
                    'message' => 'Profissional deletado com sucesso!'
                ]);
        } catch (\Exception $e) {
            return $this->errorHandler('Erro ao atualizar Profissional',$e);
        }
    }
}
