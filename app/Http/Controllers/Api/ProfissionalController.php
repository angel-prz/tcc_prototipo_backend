<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Profissional;
use App\Http\Resources\ProfissionalResource;
use App\Http\Resources\ProfissionalCollectionResource;


class ProfissionalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //para pegar o nome na table usuario (estudar jeito melhor do que isso?)
        return new ProfissionalCollectionResource(
            Profissional::whereHas('user', function ($query) {
            $query->where('tipo_usuario', 'profissional');
        })
        ->with('user:id,name')
        ->select('tipo_profissional', 'id')
        ->get()
        );
    }

    public function show(Profissional $profissional)
    {
        return new ProfissionalResource($profissional);
    }
}

