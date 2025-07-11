<?php

namespace App\Http\Controllers;

use App\Models\HorariosProfissional;
use Illuminate\Http\Request;
use App\Models\User;

class HorariosProfissionalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $horariosProfissional = HorariosProfissional::with(['profissional.user'])->get();
        //dd($horariosProfissional);
        return view('horarios_profissional.index', compact('horariosProfissional'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $profissionais = User::where('tipo_usuario', 'profissional')->get();
        return view('horarios_profissional.create', compact('profissionais'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newHorarios = $request->all();
        //dd($newConsulta);

        if(HorariosProfissional::create($newHorarios))
            return redirect('/horarios_profissional');
        else dd("Erro ao registrar horario!!");
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return view('horarios_profissional.show',
            ['horarios_profissional' => HorariosProfissional::find($id)]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $horario = HorariosProfissional::find($id);
        return view('horarios_profissional.edit',compact('horario'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $novoHorario = $request->all();
        //dd($novaConsulta);
        if(HorariosProfissional::findOrFail($id)->update($novoHorario))
            return redirect('/horarios_profissional');
        else dd("Erro ao registrar horario!!");
    }

    public function delete($id)
    {
        return view('horarios_profissional.remove', ['horario' => HorariosProfissional::findOrFail($id)]);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        if(HorariosProfissional::destroy($id))
            return redirect('/horarios_profissional');
        else dd("Erro ao registrar horario!!");
    }
}
