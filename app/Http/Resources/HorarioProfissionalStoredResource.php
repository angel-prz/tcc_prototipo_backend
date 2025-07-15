<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;


class HorarioProfissionalStoredResource extends HorarioProfissionalResource
{
    public function withResponse(Request $request, JsonResponse $response)
    {
        $response->setStatusCode(201, "Horario Criada!");
    }

    public function with($request): array
    {
      return [
          'message' => 'Horario criado com sucesso',
      ];
    }
}
