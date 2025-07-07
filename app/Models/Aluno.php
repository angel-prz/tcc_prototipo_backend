<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aluno extends Model
{
    /** @use HasFactory<\Database\Factories\AlunoFactory> */
    use HasFactory, \Znck\Eloquent\Traits\BelongsToThrough;
    protected $fillable = [
        //numero_carteirinha
        'matricula',
        'campus',
        'curso',
        'semestre',
        'ano',
        'fone_responsavel',
    ];

    public function paciente()
    {
        return $this->belongsTo(Paciente::class);
    }

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

        /* return $this->belongsToThrough(User::Class, Paciente::Class); */
    }
}
