<?php

namespace App\Http\Controllers;

use App\Models\Consulta;
use Illuminate\Http\Request;

class ConsultaController extends Controller
{
    public function index()
    {
        $consultas = Consulta::all();
        return view('consultas.index', compact('consultas'));
    }

    public function create()
    {
        return view('consultas.create');
    }

    public function show($id)
    {
        $consulta = Consulta::find($id);
        return view('consultas.show', compact('consulta'));
    }

    public function store(Request $request)
    {
        $newConsulta = $request->all();
        //dd($newConsulta);

        if(Consulta::create($newConsulta))
            return redirect('/consultas');
        else dd("Erro ao agendar consulta!!");
    }

    public function edit(Consulta $consulta)
    {
        return view('consultas.edit', compact('consulta'));
    }

    public function update(Request $request, Consulta $consulta)
    {
        $request->validate([
            'paciente_id' => 'required|exists:pacientes,id',
            'profissional_id' => 'required|exists:profissionals,id',
            'data_hora' => 'required|date',
        ]);

        $consulta->update($request->all());
        return redirect()->route('consultas.index')->with('success', 'Consulta atualizada com sucesso!');
    }

    public function destroy(Consulta $consulta)
    {
        $consulta->delete();
        return redirect()->route('consultas.index')->with('success', 'Consulta excluída com sucesso!');
    }
}
