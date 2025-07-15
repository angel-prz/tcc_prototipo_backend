<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\ConsultaStoreRequest;

class ConsultaUpdateRequest extends ConsultaStoreRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'paciente_id' => 'required|exists:pacientes,id',
            'profissional_id' => 'required|exists:profissionais,id',
            'data_hora' => 'required',
        ];
    }
}
