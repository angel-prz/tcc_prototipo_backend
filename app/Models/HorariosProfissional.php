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
        'dia_semana',
        'entrada',
        'saida',
    ];

    function profissional()
    {
        return $this->belongsTo(Profissional::class);
    }
}
