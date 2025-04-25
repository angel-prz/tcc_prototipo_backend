<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Paciente;
use Illuminate\Http\Request;

class PacienteController extends User
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $listPacientes = Paciente::all();
        //return view('pacientes.index', compact($listPacientes));
        return view('pacientes.index', ['pacientesList'=> $listPacientes]);
    }

    public function show($id)
    {
        return view('pacientes.show', ['paciente'=> Paciente::find($id)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    /* public function show(Paciente $paciente)
    {
        //
    } */

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Paciente $paciente)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    /* public function update(Request $request, Paciente $paciente)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    /*
    public function destroy(Paciente $paciente)
    {
        
    } */
}
