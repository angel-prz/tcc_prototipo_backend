<?php

namespace App\Http\Controllers;

use App\Models\Profissional;
use Illuminate\Http\Request;

class ProfissionalController extends Controller
{
    public function index()
    {
        $profissionals = Profissional::all();
        return view('profissionals.index', compact('profissionals'));
    }

    public function create()
    {
        return view('profissionals.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
            'specialization' => 'required|string|max:255',
            'license_number' => 'required|string|max:255',
        ]);

        Profissional::create($request->all());
        return redirect()->route('profissionals.index')->with('success', 'Profissional criado com sucesso!');
    }

    public function show(Profissional $profissional)
    {
        //
    }

    public function edit(Profissional $profissional)
    {
        return view('profissionals.edit', compact('profissional'));
    }

    public function update(Request $request, Profissional $profissional)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $profissional->id,
            'specialization' => 'required|string|max:255',
            'license_number' => 'required|string|max:255',
        ]);

        $profissional->update($request->all());
        return redirect()->route('profissionals.index')->with('success', 'Profissional atualizado com sucesso!');
    }

    public function destroy(Profissional $profissional)
    {
        $profissional->delete();
        return redirect()->route('profissionals.index')->with('success', 'Profissional excluído com sucesso!');
    }
}
