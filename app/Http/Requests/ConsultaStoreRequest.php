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
            'paciente_id' => 'required|exists:pacientes,id',
            'profissional_id' => 'required|exists:profissionais,id',
            'data_hora' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'paciente_id.required' => 'O campo Paciente é obrigatório.',
            'paciente_id.exists' => 'O Paciente selecionado não existe.',
            'profissional_id.required' => 'O campo Profissional é obrigatório.',
            'profissional_id.exists' => 'O Profissional selecionado não existe.',
            'data_hora.required' => 'O campo Data e Hora é obrigatório.',
        ];
    }
}
