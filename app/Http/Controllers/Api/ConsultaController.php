<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Models\Consulta;
use Illuminate\Http\Request;
use App\Http\Resources\ConsultaCollectionResource;
use App\Http\Resources\ConsultaResource;
use App\Http\Resources\ConsultaStoredResource;
use App\Http\Requests\ConsultaUpdateRequest;
use App\Http\Requests\ConsultaStoreRequest;


class ConsultaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new ConsultaCollectionResource(
            /* Consulta::with(['paciente.user','profissional.user'])->get() */
          Consulta::all()->load('paciente.user','profissional.user'));

        /*$consultas = Consulta::with([
        'paciente.user' => function($query) {
            $query->with([
                'aluno',
                'funcionario'
            ]);
        },
        'profissional.user'
    ])->get();

    return new ConsultaCollectionResource($consultas);*/
}

    /**
     * Store a newly created resource in storage.
     */
    public function store(ConsultaStoreRequest $request)
    {
        try {
            return new ConsultaStoredResource(Consulta::create($request->validated()));
        } catch (\Exception $e) {
            return $this->errorHandler('Erro ao criar Consulta',$e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Consulta $consulta)
    {
        return new ConsultaResource($consulta);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ConsultaUpdateRequest $request, Consulta $consulta)
    {
        try {
            $consulta->update($request->validated());
            return (new ConsultaResource($consulta))->additional([
                    'message' => 'Consulta atualizada com sucesso!'
            ]);
        } catch (\Exception $e) {
            return $this->errorHandler('Erro ao atualizar Consulta',$e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Consulta $consulta)
    {
        try {
            $consulta->delete();
            return (new ConsultaResource($consulta))->additional([
                    'message' => 'Consulta excluida com sucesso!'
                ]);
        } catch (\Exception $e) {
            return $this->errorHandler('Erro ao excluir Consulta',$e);
        }
    }

    public function count()
    {
        try {
        $statuses = ['agendada', 'concluida', 'cancelada', 'em_espera'];

        $counts = \App\Models\Consulta::select('status')
            ->selectRaw('COUNT(*) as total')
            ->groupBy('status')
            ->pluck('total', 'status');

        // Garante que todos os status apareçam, mesmo se não houver registros
        $result = collect($statuses)->mapWithKeys(function ($status) use ($counts) {
            return [$status => $counts[$status] ?? 0];
        });

        return response()->json([
            'total' => $result->sum(),
            'por_status' => $result
        ]);
        } catch (\Throwable $e) {
        return response()->json([
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ], 500);
    }
    }
}
