<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DocumentosAtestados extends Model
{
    /** @use HasFactory<\Database\Factories\DocumentosAtestadosFactory> */
    use HasFactory;

    protected $fillable = [
        'tipo_docmento',
        'texto',
        'periodo',
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
