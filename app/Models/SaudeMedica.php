<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaudeMedica extends Model
{
    /** @use HasFactory<\Database\Factories\SaudeMedicaFactory> */
    use HasFactory;

    protected $table = 'saude_medica';

    protected $fillable = [
        'paciente_id',
        'alergias',
        'ulcera',
        'cirurgias',
        'tonturas_convulsoes_desmaios',
        'medicacao',
        'problema_cardiaco',
        'problema_coagulacao',
        'febre_reumatica',
        'psicopatias',
        'medico',
        'hepatite',
        'diabete',
        'problemas_respiratorios',
    ];

    public function paciente()
    {
        return $this->belongsTo(Paciente::class);
    }

    public function User()
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
}
