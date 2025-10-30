<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ProfissionalStoredResource extends ProfissionalResource
{
    public function withResponse(Request $request, JsonResponse $response)
    {
        $response->setStatusCode(201, "Profissional Criado!");
    }

    public function with($request): array
    {
      return [
          'message' => 'Profissional criado com sucesso',
      ];
    }
}
