<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Paciente extends Model
{
    protected $fillable = [
        'tipo_paciente',
    ];


    //RELAÇÔES TERMINAR DEPOIS
    //EXTENDS USER
    public function user()
    {
        return $this->belongsTo(User::class);
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
