<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ConsultaAtendimentoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
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
            'status' => 'required|in:agendada,finalizada,cancelada',
            'queixa_principal' => 'nullable',
            'historico_doenca' => 'nullable',
            'diagnostico' => 'nullable',
            'observacoes' => 'nullable',
            'pressao_arterial' => 'nullable',
            'frequencia_cardiaca' => 'nullable',
            'temperatura' => 'nullable',
            'peso' => 'nullable',
            'altura' => 'nullable',
            'alergias' => 'nullable',
            'ulcera' => 'nullable',
            'cirurgias' => 'nullable',
            'tonturas_convulsoes_desmaios' => 'nullable',
            'medicacao' => 'nullable',
            'problema_cardiaco' => 'nullable',
            'problema_coagulacao' => 'nullable',
            'febre_reumatica' => 'nullable',
            'psicopatias' => 'nullable',
            'medico' => 'nullable',
            'hepatite' => 'nullable',
            'diabete' => 'nullable',
            'problemas_respiratorios' => 'nullable',
            'paciente_id' => 'nullable',
            'gengivite' => 'nullable',
            'outras_patologias' => 'nullable',
            'periodontite' => 'nullable',
            'tratamentos_anteriores' => 'nullable',
            'proteses_aparelhos' => 'nullable',
        ];
    }
}
