<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrescricaoMedicamentos extends Model
{
    /** @use HasFactory<\Database\Factories\PrescricaoMedicamentosFactory> */
    use HasFactory;

    protected $fillable = [
        'medicamento',
        'dosagem',
        'frequencia',
        'duracao',
        'instrucoes_adicionais',
        'atendimento_id',
    ];

    public function atendimento(){
        return $this->belongsTo(Atendimento::class, 'atendimento_id', 'id');
    }
}
