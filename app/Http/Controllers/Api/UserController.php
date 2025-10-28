<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserCollectionResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserStoredResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Exception;
use App\Http\Controllers\Api\LoginController;
use App\Http\Resources\ConsultaCollectionResource;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        /* if (!$request->user()->tokenCan('is-admin') || !$request->user()->tokenCan('is-profissional') )
            return response()->json(['error' => 'Acesso negado!'], 403); */
        return new UserCollectionResource(User::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserStoreRequest $request)
    {
        /* if (!$request->user()->tokenCan('is-admin'))
            return response()->json(['error' => 'Acesso negado!'], 403); */
        try {
            return new UserStoredResource(User::create($request->validated()));
        } catch (\Exception $e) {
            return $this->errorHandler('Erro ao criar Usuario',$e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, User $user)
    {
        /* if($request->user()->id !== $user->id && !$request->user()->tokenCan('is-admin'))
            return response()->json(['error' => 'Acesso negado! , userid='.$user->id ], 403); */

        return new UserResource($user);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserUpdateRequest $request, User $user)
    {
        /* if($request->user()->id !== $user->id && !$request->user()->tokenCan('is-admin'))
            return response()->json(['error' => 'Acesso negado!'], 403); */

        try {
            $user->update($request->validated());
            return (new UserResource($user))->additional([
                    'message' => 'Usuario atualizado com sucesso!'
            ]);
        } catch (\Exception $e) {
            return $this->errorHandler('Erro ao atualizar Usuario',$e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, User $user)
    {
        $statusHttpError = 500;
        try {
            if($request->user()->id !== $user->id && !$request->user()->tokenCan('is-admin'))
            {
                $statusHttpError = 403;
                throw new Exception("Acesso negado!!");
            }
            $user->delete();

            /* logout
            if($request->user()->id !== $user->id)
            */

            return (new UserResource($user))->additional([
                    'message' => 'Usuario deletado com sucesso!'
                ]);
        } catch (\Exception $e) {
            return $this->errorHandler('Erro ao deletar usuario',$e,$statusHttpError);
        }
    }

    public function showUserConsultas(User $user)
    {
        
        if ($user->paciente) {
            $consultas = $user->consultaComoPaciente()->latest('data_hora')->get();
            return new ConsultaCollectionResource($consultas);
        }
        if ($user->profissional) {
            $consultas = $user->consultaComoProfissional()->latest('data_hora')->get();
            return new ConsultaCollectionResource($consultas);
        }
        
        return response()->json(['error' => 'Usuário não recebe consultas.'], 404);
    }

}
