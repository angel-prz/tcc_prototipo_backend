<?php

use App\Http\Controllers\Api\ConsultaController;
use App\Http\Controllers\Api\HorariosProfissionalController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\PacienteController;
use App\Http\Controllers\Api\ProfissionalController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('v1')->group(function () {

    // privadas
    Route::middleware('auth:sanctum')->group(function () {

        Route::middleware('ability:is-admin')->group(function () {
            /*             Route::apiResource('users', UserController::class);
             */ /* Route::apiResource('consultas', ConsultaController::class); */
            Route::apiResource('horarios_profissional', HorariosProfissionalController::class);
        });
        Route::apiResource('users', UserController::class);
        Route::apiResource('users', UserController::class)
            ->only('show', 'update', 'destroy');

        Route::get('consultas/count', [ConsultaController::class, 'count']);
        Route::apiResource('consultas', ConsultaController::class);

        Route::apiResource('horarios_profissional', HorariosProfissionalController::class)
            ->middleware(['ability:is-profissional']);

        Route::get('pacientes/{paciente}/consultas', [PacienteController::class, 'showConsultas']);
        Route::apiResource('pacientes', PacienteController::class);

        Route::get('profissionais/{profissional}/consultas', [ProfissionalController::class, 'showConsultas']);
        Route::get('profissionais', [ProfissionalController::class]);

        Route::post('/logout', [LoginController::class, 'logout']);
    });

    // publicas
    Route::apiResource('horarios_profissional', HorariosProfissionalController::class)
        ->only('index');
    Route::apiResource('profissionais', ProfissionalController::class)->only(['index']);
    Route::post('/login', [LoginController::class, 'login']);
    Route::post('/ping', function () {
        return response()->json(['message' => 'pong']);
    });
    Route::get('/users/{user}/consultas', [UserController::class, 'showUserConsultas']);
});
