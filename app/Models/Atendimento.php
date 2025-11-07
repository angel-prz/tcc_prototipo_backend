<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Atendimento extends Model
{
    /** @use HasFactory<\Database\Factories\AtendimentoFactory> */
    use HasFactory;

    protected $fillable = [
        'queixa_principal',
        'historico_doenca',
        'diagnostico',
        'observacoes',
        'pressao_arterial',
        'frequencia_cardiaca',
        'temperatura',
        'peso',
        'altura',
    ];

    public function consulta()
    {
        return $this->belongsTo(Consulta::class, 'consulta_id', 'id');
    }

    public function paciente()
    {
        return $this->belongsToThrough(
            Paciente::class,
            Consulta::class,
            null,
            null,
            'consulta_id',
            'id'
        );
    }

    public function DocumentosAtestados()
    {
        return $this->hasMany(DocumentosAtestados::class, 'atendimento_id', 'id');
    }

    public function ExameProcedimentos()
    {
        return $this->hasMany(ExameProcedimentos::class, 'atendimento_id', 'id');
    }

    public function PrescricaoMedicamentos()
    {
        return $this->hasMany(PrescricaoMedicamentos::class, 'atendimento_id', 'id');
    }
}
