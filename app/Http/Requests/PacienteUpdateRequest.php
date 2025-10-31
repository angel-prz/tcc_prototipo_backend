<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PacienteUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id' => 'required|integer|exists:pacientes,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'cpf' => 'required|string',
            'password' => 'nullable|string|min:6',
            'data_nascimento' => 'required|date',
            'sexo' => 'required|in:m,f,o',
            'fone_celular' => 'nullable|string',
            'fone_fixo' => 'nullable|string',
            'tipo_paciente' => 'required|in:aluno,funcionario',
            'matricula' => 'nullable|required_if:tipo_paciente,aluno|string',
            'campus' => 'nullable', /* |required_if:tipo_paciente,aluno|string */
            'curso' => 'nullable', /* |required_if:tipo_paciente,aluno|string */
            'turma' => 'nullable', /* |required_if:tipo_paciente,aluno|string */
            'semestre' => 'nullable', /* |required_if:tipo_paciente,aluno|string */
            'ano' => 'nullable', /* |required_if:tipo_paciente,aluno|string */
            'turno' => 'nullable',
            'fone_responsavel' => 'nullable', /* |required_if:tipo_paciente,aluno|string */
            'tipo_funcionario' => 'nullable', /* |required_if:tipo_paciente,funcionario|string */
            'cargo' => 'nullable',
            'setor' => 'nullable',
            'ramal' => 'nullable',
            'turno' => 'nullable',
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
