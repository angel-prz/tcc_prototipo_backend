<?php

use App\Http\Controllers\ConsultaController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PacienteController;
use App\Http\Controllers\ProfissionalSaudeController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

//usuario generico
Route::get('/users',[UserController::class,'index']);
Route::get('/users/{id}', [UserController::class,'show']);

//profissionais
Route::get('/profissionais', [ProfissionalSaudeController::class,'index']);
Route::get('/profissionais/{id}', [ProfissionalSaudeController::class,'show']);

//pacientes
Route::get('/pacientes', [PacienteController::class,'index']);
Route::get('/pacientes/{id}', [PacienteController::class,'show']);