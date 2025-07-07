<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ConsultaStoredResource extends ConsultaResource
{
    public function withResponse(Request $request, JsonResponse $response)
    {
        $response->setStatusCode(201, "Consulta Criada!");
    }

    public function with($request): array
    {
      return [
          'message' => 'Consulta criada com sucesso',
      ];
    }
}
