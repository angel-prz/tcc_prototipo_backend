<?php

use App\Http\Controllers\ConsultaController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PacienteController;
use App\Http\Controllers\ProfissionalController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

//usuario generico
Route::get('/users',[UserController::class,'index']);
Route::get('/users/{id}', [UserController::class,'show']);

//CRUD - USER
Route::get('/user', [UserController::class,'create']);
Route::post('/user', [UserController::class,'store']);

Route::get('/user/edit/{id}',[UserController::class,'edit'])->name('user.edit');
Route::post('/user/update/{id}',[UserController::class,'update'])->name('user.update');

Route::get('/user/delete/{id}',[UserController::class,'delete'])->name('user.delete');
Route::post('/user/remove/{id}',[UserController::class,'remove'])->name('user.remove');

//CRUD - profissionais
Route::get('/profissionais', [ProfissionalController::class,'index']);
Route::get('/profissionais/{id}', [ProfissionalController::class,'show']);


// Rotas para Consultas
Route::get('/consultas', [ConsultaController::class, 'index']);
Route::get('/consultas/{id}', [ConsultaController::class, 'show']);
Route::get('/consultas/create', [ConsultaController::class, 'create'])->name('consultas.create');
Route::post('/consulta', [ConsultaController::class, 'store'])->name('consultas.store');
Route::get('/consultas/edit/{id}', [ConsultaController::class, 'edit'])->name('consultas.edit');
Route::post('/consultas/update/{id}', [ConsultaController::class, 'update'])->name('consultas.update');
Route::get('/consultas/delete/{id}', [ConsultaController::class, 'delete'])->name('consultas.delete');
Route::post('/consultas/remove/{id}', [ConsultaController::class, 'remove'])->name('consultas.remove');


// CRUD - pacientes
/* Route::get('/pacientes', [PacienteController::class,'index']);
Route::get('/pacientes/{id}', [PacienteController::class,'show']); */
