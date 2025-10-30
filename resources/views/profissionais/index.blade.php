<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profissional</title>
</head>

<body>
    <h1>Lista de Profissionais</h1>
    <a href="/profissional">Criar Novo Profissional</a>
    {{-- resources/views/layouts/app.blade.php --}}
    {{-- @include('partials.header') --}}
    {{-- ^inlcude/require do vanilla php --}}    
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Tipo de profissional</th>
                <th>Sigla do Conselho</th>
                <th>UF do Conselho</th>
                <th>Numero do Conselho</th>

            </tr>
        </thead>
        <tbody>
            @foreach ($profissionals as $profissional)
                <tr>
                    <td>{{ $profissional->id }}</td>
                    <td>{{ $profissional->user->name }}</td>
                    <td>{{ $profissional->tipo_profissional }}</td>
                    <td>{{ $profissional->sigla_conselho }}</td>
                    <td>{{ $profissional->uf_conselho }}</td>
                    <td>{{ $profissional->numero_conselho }}</td>
                    <td>
                        <a href="{{ route('profissional.edit', $profissional->id) }}">Editar</a>
                        <form action="{{ route('profissional.delete', $profissional->id) }}" method="POST" style="display:inline;">
                            @csrf
                            @method('DELETE')
                            <button type="submit">Excluir</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
