<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Funcionario extends Model
{
    use HasFactory;

    protected $fillable = [
        'tipo_funcionario',
        'cargo',
        'setor',
        'ramal',
        'turno',
    ];

    public function user()
    {
        return $this->belongsToThrough(
            User::class, [Paciente::class],
            null,
            '',
            [
                User::class=>'user_id',
                Paciente::class=>'paciente_id'
            ]
        );
    }
}
