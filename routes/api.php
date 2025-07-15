<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ConsultaController;
use App\Http\Controllers\Api\PacienteController;


/* Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum'); */

Route::prefix('v1')->group(function () {
    Route::apiResource('users', UserController::class);
    Route::apiResource('consultas', ConsultaController::class);
    Route::apiResource('pacientes', PacienteController::class);
});
