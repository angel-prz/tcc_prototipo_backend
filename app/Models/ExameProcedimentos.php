<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExameProcedimentos extends Model
{
    /** @use HasFactory<\Database\Factories\ExameProcedimentosFactory> */
    use HasFactory;

    protected $fillable = [
        'exame',
        'tipo_exame',
        'quantidade',
        'atendimento_id',
    ];

    public function atendimento(){
        return $this->belongsTo(Atendimento::class, 'atendimento_id', 'id');
    }

    public function consulta(){
        return $this->belongsToThrough(
            Consulta::class,
            Atendimento::class,
            null,
            null,
            'atendimento_id',
            'id'
        );
    }
}
