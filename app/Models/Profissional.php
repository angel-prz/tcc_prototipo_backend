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

    // Example of a method specific to Profissional
    public function getProfessionalDetails()
    {
        return "{$this->specialization} - License: {$this->license_number}";
    }
}
