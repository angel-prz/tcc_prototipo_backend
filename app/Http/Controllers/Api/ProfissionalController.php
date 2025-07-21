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

