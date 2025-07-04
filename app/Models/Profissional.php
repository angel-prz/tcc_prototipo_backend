<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Profissional extends User
{
  
    protected $table = 'profissionais';
    protected $fillable = [
        'specialization', 
        'license_number', 
        'years_of_experience'
    ];

    //RELAÇÔES DB TERMINAR DEPOIS
    public function consultas()
    {
        return $this->hasMany(Consulta::class);
    }

    
}
