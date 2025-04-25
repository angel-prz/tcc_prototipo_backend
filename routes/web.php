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

//CRUD
Route::get('/user', [UserController::class,'create']);
Route::post('/user', [UserController::class,'store']);

Route::get('/user/edit/{id}',[UserController::class,'edit'])->name('user.edit');
Route::post('/user/update/{id}',[UserController::class,'update'])->name('user.update');

Route::get('/user/delete/{id}',[UserController::class,'delete'])->name('user.delete');
Route::post('/user/remove/{id}',[UserController::class,'delete'])->name('user.remove');

//profissionais
Route::get('/profissionais', [ProfissionalController::class,'index']);
Route::get('/profissionais/{id}', [ProfissionalController::class,'show']);

//pacientes
Route::get('/pacientes', [PacienteController::class,'index']);
Route::get('/pacientes/{id}', [PacienteController::class,'show']);