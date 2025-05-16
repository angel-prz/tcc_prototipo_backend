<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Profissional extends User
{
    // Additional attributes specific to Profissional
    protected $fillable = [
        // ...existing User attributes...
        'specialization', 
        'license_number', 
        'years_of_experience'
    ];

    //RELAÇÔES DB TERMINAR DEPOIS
}
