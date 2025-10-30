<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ConsultaStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

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

    public function messages(): array
    {
        return [
            'paciente_id.required' => 'O campo Paciente é obrigatório.',
            'profissional_id.required' => 'O campo Profissional é obrigatório.',
            'data_hora.required' => 'O campo Data e Hora é obrigatório.',
        ];
    }
}
