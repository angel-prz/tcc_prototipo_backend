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

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //dd(Auth::user());
        return new UserCollectionResource(User::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserStoreRequest $request)
    {
        try {
            return new UserStoredResource(User::create($request->validated()));
        } catch (\Exception $e) {
            return $this->errorHandler('Erro ao criar Usuario',$e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserUpdateRequest $request, User $user)
    {
        try {
            $user->update($request->validated());
            return new UserResource($user);
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
            if(!$request->user()->tokenCan('is-admin'))
            {
                $statusHttpError = 403;
                throw new Exception("Acesso negado!!");
            }
            $user->delete();
            return (new UserResource($user))->additional([
                    'message' => 'Usuario deletado com sucesso!'
                ]);
        } catch (\Exception $e) {
            return $this->errorHandler('Erro ao deletar usuario',$e,$statusHttpError);
        }
    }
}
