<?php

namespace App\Http\Requests;

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
            'paciente_id' => 'required',
            'profissional_id' => 'required',
            'observacao' => 'string',
            'data_hora' => 'required',
        ];
    }
}
