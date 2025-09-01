<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaudeOdontologica extends Model
{
    /** @use HasFactory<\Database\Factories\SaudeOdontologicaFactory> */
    use HasFactory;

    public function User()
    {
        return $this->belongsToThrough(
        User::class,
        Paciente::class,
        null,
        null,
        'paciente_id',
        'id'
        );
    }
}
