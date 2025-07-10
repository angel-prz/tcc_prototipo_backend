<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuario</title>
</head>

<body>
    <h1>Lista de Profissionais</h1>
   {{--  <a href="{{ route('profissionals.create') }}">Criar Novo Profissional</a> --}}
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Especialização</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($profissionals as $profissional)
                <tr>
                    <td>{{ $profissional->id }}</td>
                    <td>{{ $profissional->name }}</td>
                    <td>{{ $profissional->email }}</td>
                    <td>{{ $profissional->specialization }}</td>
                    <td>
                        <a href="{{ route('profissional.edit', $profissional->id) }}">Editar</a>
                        <form action="{{ route('profissional.destroy', $profissional->id) }}" method="POST" style="display:inline;">
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
