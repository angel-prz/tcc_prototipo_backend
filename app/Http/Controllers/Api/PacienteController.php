<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Models\Paciente;
use Illuminate\Http\Request;
use App\Http\Resources\PacienteResource;
use App\Http\Resources\PacienteCollectionResource;
use App\Http\Resources\PacienteStoredResource;
use App\Http\Requests\PacienteStoreRequest;
use App\Http\Requests\PacienteUpdateRequest;

class PacienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new PacienteCollectionResource(Paciente::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PacienteStoreRequest $request)
    {
        try {
            return new PacienteStoredResource(Paciente::create($request->validated()));
        } catch (\Exception $e) {
            return $this->errorHandler('Erro ao criar Paciente',$e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Paciente $Paciente)
    {
        return new PacienteResource($Paciente);
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
            return $this->errorHandler('Erro ao atualizar Paciente',$e);
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
                    'message' => 'Paciente deletado com sucesso!'
                ]);
        } catch (\Exception $e) {
            return $this->errorHandler('Erro ao atualizar Paciente',$e);
        }
    }
}
