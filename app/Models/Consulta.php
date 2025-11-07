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
        return $this->belongsTo(Paciente::class, 'paciente_id', 'id');
    }
    public function profissional()
    {
        return $this->belongsTo(Profissional::class, 'profissional_id', 'id');
    }

    public function dispenca_educacao_fisica()
    {
        return $this->hasOne(DispensaEducacaoFisica::class, 'consulta_id', 'dispensas_educacao_fisica_id');
    }

    public function userProfissional()
    {
        return $this->belongsToThrough(
        User::class,
        Profissional::class,
        null,
        null,
        'profissional_id',
        'id'
        );
    }

    public function userPaciente()
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

    public function atendimento()
    {
        return $this->hasOne(Atendimento::class, 'consulta_id', 'id');
    }

    public function documentosAtestados()
    {
        return $this->hasManyThrough(
            DocumentosAtestados::class,
            Atendimento::class,
            'consulta_id',
            'atendimento_id',
            'id',
            'id'
        );
    }

    public function saudeMedica(){
        return $this->hasOneThrough(SaudeMedica::class, Paciente::class);
    }

    public function saudeOdontologica() {
        return $this->hasOneThrough(SaudeOdontologica::class, Paciente::class);
    }
}
