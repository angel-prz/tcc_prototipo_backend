<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Profissional extends User
{

    use HasFactory;

    protected $table = 'profissionais';
    protected $fillable = [
        'tipo_profissional',
        'sigla_conselho',
        'uf_conselho',
        'numero_conselho',
    ];

    //RELAÇÔES DB TERMINAR DEPOIS
    public function consultas()
    {
        return $this->hasMany(Consulta::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'id');
    }

    public function horariosProfissional()
    {
        return $this->hasMany(HorariosProfissional::class);
    }
}
