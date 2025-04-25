<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $listUser = User::all();
        //return view('pacientes.index', compact($listPacientes));
        return view('users.index', ['usersList'=> $listUser]);
    }

    public function show($id)
    {
        return view('users.show', ['user'=> User::find($id)]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newUser = $request->all();
        //dd($newUser);

        if(User::create($newUser))
            return redirect('/users');
        else dd("Erro ao inserir usuario!!");
    }

    /**
     * Criar
     */
    public function create()
    {
        return view('users.create');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $User)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $User)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $User)
    {
        //
    }
}
