<?php

namespace App\Http\Resources;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserStoredResource extends UserResource
{
    public function withResponse(Request $request, JsonResponse $response)
    {
        $response->setStatusCode(201,"Usuario Criado!");
    }

    public function with($request): array
    {
      return [
          'message' => 'Usuario criado com sucesso',
      ];
    }
}
