<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaudeMedica extends Model
{
    /** @use HasFactory<\Database\Factories\SaudeMedicaFactory> */
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
