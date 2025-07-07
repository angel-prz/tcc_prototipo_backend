<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Testing\Fluent\Concerns\Has;

class Consulta extends Model
{
    use HasFactory;

    protected $fillable = [
        'paciente_id',
        'profissional_id',
        'status',
        'observacao',
        'data_hora',
    ];

    public function paciente()
    {
        return $this->belongsTo(Paciente::class, 'paciente_id');
    }
    public function profissional()
    {
        return $this->belongsTo(Profissional::class, 'profissional_id');
    }

    public function dispenca_educacao_fisica()
    {
        return $this->hasOne(DispensaEducacaoFisica::class);
    }
}
