<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Testing\Fluent\Concerns\Has;

class Consulta extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'id_paciente',
        'id_profissional',
        'status',
        'observacao',
        'data_hora',
        // add any other fields that should be fillable
    ];

    public function paciente()
    {
        return $this->belongsTo(User::class, 'id_paciente');
    }
    public function profissional()
    {
        return $this->belongsTo(User::class, 'id_profissional');
    }
}
