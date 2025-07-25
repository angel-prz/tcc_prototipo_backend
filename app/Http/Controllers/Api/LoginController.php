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

            $ability = [];

            if ($user->tipo_usuario == 'administrador')
                $ability = ['is-admin'];

            if($user->tipo_usuario == 'paciente')
                $ability = ['is-paciente'];

            if($user->tipo_usuario == 'profissional')
                $ability = ['is-profissional'];

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

    public function logout(Request $request)
    {
        try {
            $auth_user = $request->user();
            if($request->has('all'))
            {
                $auth_user->tokens()->delete();
                $result = ['logout' => 'Todos os tokens foram removidos'];
            }
            else
            {
                $auth_user->currentAccessToken()->delete();
                $result = ['logout' => 'Token removido, usuario desconectado!'];
            }
            return response()->json($result);
        } catch (\Exception $error) {
            return response()->json([
                'Error' => $error->getMessage()
            ], 500);
        }
    }
}
