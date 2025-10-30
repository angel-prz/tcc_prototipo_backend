<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paciente extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    public $incrementing = false;

    protected $fillable = [
        'id',
        'tipo_paciente',
    ];

    // RELAÇÔES TERMINAR DEPOIS
    // EXTENDS USER
    public function user()
    {
        return $this->belongsTo(User::class, 'id', 'id');
    }

    public function aluno()
    {
        return $this->hasOne(Aluno::class, 'id', 'id');
    }

    public function funcionario()
    {
        return $this->hasOne(Funcionario::class, 'id', 'id');
    }

    // RELAÇÔES 1 PARA MUITOS (1toN)
    public function consultas()
    {
        return $this->hasMany(Consulta::class, 'paciente_id', 'id');
    }

    public function saudeMedica()
    {
        return $this->hasOne(SaudeMedica::class, 'paciente_id', 'id');
    }

    public function saudeOdontologica()
    {
        return $this->hasOne(SaudeOdontologica::class, 'paciente_id', 'id');
    }

    // mas apenas uma dispensa por semestre(?)
    public function dispenca_educacao_fisica()
    {
        return $this->hasMany(DispensaEducacaoFisica::class, 'paciente_id', 'id');
    }

    public function alunoDispensa()
    {
        return $this->hasManyThrough(
            DispensaEducacaoFisica::class,
            Aluno::class,
            'consulta_id',
            'paciente_id',
            'id',
            'id'
        );
    }
}
