<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ConsultaController;
use App\Http\Controllers\Api\PacienteController;
use App\Http\Controllers\Api\ProfissionalController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\HorariosProfissionalController;



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('v1')->group(function () {

    //privadas
    Route::middleware('auth:sanctum')->group(function () {
        Route::apiResource('users', UserController::class);

        Route::apiResource('users', UserController::class)
            ->only('destroy')
            ->middleware("ability:is-admin");

        Route::get('consultas/count', [ConsultaController::class, 'count']);
        Route::apiResource('consultas', ConsultaController::class);

        /* Route::apiResource('pacientes', PacienteController::class); */
    });

    // publicas
    Route::apiResource('horarios_profissional', HorariosProfissionalController::class);
    Route::apiResource('profissionais', ProfissionalController::class)->only(['index']);
    Route::post('/login',[LoginController::class, 'login']);
});
