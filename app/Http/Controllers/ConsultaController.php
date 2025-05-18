<?php

namespace App\Http\Controllers;
use App\Models\User;

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
        $profissionais = User::where('tipo_usuario', 'profissionalSaude')->get();
        $pacientes = User::where('tipo_usuario', 'paciente')->get();
        return view('consultas.create', compact('profissionais', 'pacientes'));
        //return view('consultas.create');
    }

    public function show($id)
    {
        return view('consultas.show', ['consulta' => Consulta::find($id)]);
    }

    public function store(Request $request)
    {
        $newConsulta = $request->all();
        //dd($newConsulta);

        if(Consulta::create($newConsulta))
            return redirect('/consultas');
        else dd("Erro ao agendar consulta!!");
    }

    public function edit($id) 
    {
        $consulta = Consulta::find($id);
        return view('consultas.edit',compact('consulta'));
    }


    public function update(Request $request, $id)
    {
        $novaConsulta = $request->all();
        //dd($novaConsulta);
        if(Consulta::findOrFail($id)->update($novaConsulta))
            return redirect('/consultas');
        else dd("Erro ao atualizar consulta!!");
    }

    public function delete($id) 
    {
        return view('consultas.remove', ['consulta' => Consulta::findOrFail($id)]);
    }

    public function remove($id)
    {
        if(Consulta::destroy($id))
            return redirect('/consultas');
        else dd("Erro ao remover consulta!!");
    }
}
