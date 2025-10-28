<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PacienteStoreRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'cpf' => 'required|string|unique:users',
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
            'fone_responsavel' => 'nullable', /* |required_if:tipo_paciente,aluno|string */
            'tipo_funcionario' => 'nullable', /* |required_if:tipo_paciente,funcionario|string*/

        ];
    }

    public function messages(): array
    {
        return [
            'id.exists' => 'O Paciente selecionado não existe.',
        ];
    }
}
