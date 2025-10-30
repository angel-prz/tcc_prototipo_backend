<?php

namespace App\Http\Requests;

use App\Http\Requests\UserStoreRequest;

class UserUpdateRequest extends UserStoreRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|email|max:255',
            'password' => 'nullable|string',
            'name' => 'required|string|max:255',
            'data_nascimento' => 'nullable|date',
            'sexo' => 'nullable|string|in:M,F',
            'endereco' => 'nullable|string|max:255',
            'naturalidade' => 'nullable|string|max:255',
            'fone_celular' => 'nullable|string|max:15',
            'fone_fixo' => 'nullable|string|max:15',
            'tipo_usuario' => 'required|string|max:255',
        ];
    }
}
