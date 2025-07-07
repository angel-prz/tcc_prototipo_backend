<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Paciente extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';
    public $incrementing = false;

    protected $fillable = [
        'id',
        'tipo_paciente',
    ];


    //RELAÇÔES TERMINAR DEPOIS
    //EXTENDS USER
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function aluno()
    {
        return $this->hasOne(Aluno::class);
    }

    public function funcionario()
    {
        return $this->hasOne(Funcionario::class);
    }
    //RELAÇÔES 1 PARA MUITOS (1toN)
    public function consultas()
    {
        return $this->hasMany(Consulta::class);
    }

    //mas apenas uma dispensa por semestre(?)
    public function dispenca_educacao_fisica()
    {
        return $this->hasMany(DispensaEducacaoFisica::class);
    }



}
