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

    public function pacienteAluno()
    {
        return $this->belongsToThrough(
        Paciente::class,
        Aluno::class,
        null,
        null,
        /* 'id',
        'id' */
        );
    }

    function consulta()
    {
        return $this->belongsTo(Consulta::class, 'consulta_id', 'id');
    }
}
