<?php

use App\Http\Controllers\ConsultaController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PacienteController;
use App\Http\Controllers\ProfissionalController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::controller(UserController::class)->group(function () {
    Route::prefix('/users')->group(function () {
        Route::get('/', 'index');
        Route::get('/{id}','show');
    });

    Route::prefix('/user')->group(function () {
        Route::get('/', 'create');
        Route::post('/', 'store');
        Route::get('/edit/{id}', 'edit')->name('user.edit');
        Route::post('/update/{id}', 'update')->name('user.update');
        Route::get('/delete/{id}', 'delete')->name('user.delete');
        Route::post('/remove/{id}', 'remove')->name('user.remove');
    });
});

// Rotas para Consultas
Route::controller(ConsultaController::class)->group(function ()
{
    Route::prefix('/consultas')->group(function () {
        Route::get('/','index');
        Route::get('/{id}', 'show');
    });

    Route::prefix('/consulta')->group(function (){
        Route::get('/', 'create');
        Route::post('/', 'store');
        Route::get('edit/{id}', 'edit')->name('consulta.edit');
        Route::post('/update/{id}', 'update')->name('consulta.update');
        Route::get('/delete/{id}', 'delete')->name('consulta.delete');
        Route::post('/remove/{id}', 'remove')->name('consulta.remove');

    });
});
