<?php

namespace App\Http\Controllers;

use App\Models\DispensaEducacaoFisica;
Use App\Models\Consulta;
use Illuminate\Http\Request;

class DispensaEducacaoFisicaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dispensas = DispensaEducacaoFisica::all();

        return view('dispensasef.index', compact('dispensas'));

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $consultas = Consulta::with(['paciente.user'])->whereHas('paciente',
            function ($query) {    $query->where('tipo_paciente', 'aluno');})->get();
        return view('dispensasef.create', compact('consultas'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newDispensa = $request->all();
        //  dd($newDispensa);

        if(DispensaEducacaoFisica::create($newDispensa))
            return redirect('/dispensas');
        else dd("Erro ao agendar dispensa!!");
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return view('dispensasef.show', ['dispensa' => DispensaEducacaoFisica::find($id)]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $dispensa = DispensaEducacaoFisica::find($id);
        return view('dispensasef.edit',compact('dispensa'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $novaDispensa = $request->all();
        //dd($novaDispensa);
        if(DispensaEducacaoFisica::findOrFail($id)->update($novaDispensa))
            return redirect('/dispensasef');
        else dd("Erro ao atualizar dispensa!!");
    }

    public function delete($id)
    {
        return view('dispensasef.remove', ['dispensa' => DispensaEducacaoFisica::findOrFail($id)]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        if(DispensaEducacaoFisica::destroy($id))
            return redirect('/dispensasef');
        else dd("Erro ao remover dispensa!!");
    }
}
