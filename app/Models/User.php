<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'email',
        'password',
        'name',
        'cpf',
        'data_nascimento',
        'sexo',
        'endereco',
        'naturalidade',
        'fone_celular',
        'fone_fixo',
        'tipo_usuario',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    //depois
    //RELAÇÔES  1 para 1 ? FILHOS/CHILD
    public function paciente()
    {
        return $this->hasOne(Paciente::class, 'id', 'id');
    }
    public function profissional()
    {
        return $this->hasOne(Profissional::class, 'id', 'id');
    }

    public function aluno()
    {
        return $this->hasOneThrough(
            Aluno::class,
            Paciente::class,
            'id',
            'id',
            'id',
            'id'
        );
    }

    public function funcionario()
    {
        return $this->hasOneThrough(
            Aluno::class,
            Funcionario::class,
            'id',
            'id',
            'id',
            'id'
        );
    }

    public function consultaComoPaciente()
    {
        return $this->hasManyThrough(
            Consulta::class,
            Paciente::class,
            'id',
            'paciente_id',
            'id',
            'id'
        );
    }

    public function consultaComoProfissional()
    {
        return $this->hasManyThrough(
            Consulta::class,
            Profissional::class,
            'id',
            'profissional_id',
            'id',
            'id'
        );
    }

    public function horarioDoProfissional()
    {
        return $this->hasManyThrough(
            HorariosProfissional::class,
            Profissional::class,
            null,null,
            'id',
            'profissional_id',
            /* 'profissional_id',
            'id' */
        );
    }

}
