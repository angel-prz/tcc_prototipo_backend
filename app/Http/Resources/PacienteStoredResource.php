<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class PacienteStoredResource extends PacienteResource
{
    public function withResponse(Request $request, JsonResponse $response)
    {
        $response->setStatusCode(201,"Paciente Criado!");
    }

    public function with($request): array
    {
      return [
          'message' => 'Paciente criado com sucesso',
      ];
    }
}
