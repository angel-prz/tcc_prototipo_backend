<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HorariosProfissional extends Model
{
    /** @use HasFactory<\Database\Factories\HorariosProfissionalFactory> */
    use HasFactory;
    protected $table = 'horarios_profissionais';

    protected $fillable = [
        'profissional_id',
        'dia_semana',
        'entrada',
        'saida',
    ];

    function profissional()
    {
        return $this->belongsTo(Profissional::class);
    }

    public function userProfissional()
    {
        return $this->belongsToThrough(
        User::class,
        Profissional::class,
        'id',
        'id',
        /* 'id',
        'profissional_id' */
        );
    }
}
