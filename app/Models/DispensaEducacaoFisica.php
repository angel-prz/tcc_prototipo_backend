<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class DispensaEducacaoFisica extends Model
{
    use HasFactory;
    
    protected $table = 'dispensas_educacao_fisica';
    protected $fillable = [
        'turma',
        'motivo',
        'comeco',
        'fim',
        'numero_dias',
    ];

    function paciente() 
    {
        return $this->belongsTo(Paciente::class);
    }

    function consulta()
    {
        return $this->belongsTo(Consulta::class);
    }
}