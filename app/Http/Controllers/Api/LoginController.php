<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use Illuminate\Http\Request;
use App\Models\Users;
use Exception;
use App\Http\Requests\LoginRequest;

class LoginController extends Controller
{
    public function login(LoginRequest $request) {
    try {
        $user = $request->user;
        if (!$user) throw new Exception("Dados inválidos!");

        $ability = $user->tipo_usuario === 'administrador' ? ['is-admin'] : [];

        $token = $user->createToken($user->email, $ability)->plainTextToken;

        return compact('token', 'user');
    } catch (Exception $error) {
        return $this->errorHandler(
            $error->getMessage(),
            $error,
            401
        );
    }
}

}
