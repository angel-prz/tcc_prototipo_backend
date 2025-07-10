<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuario</title>
</head>

<body>
    <h1>Lista de Consultas</h1>
    <a href="{{ route('consulta.create') }}">Criar Nova Consulta</a>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Paciente</th>
                <th>Profissional</th>
                <th>Data e Hora</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($consultas as $consulta)
                <tr>
                    <td>{{ $consulta->id }}</td>
                    <td>{{ $consulta->paciente->name ?? '-' }}</td>
                    <td>{{ $consulta->profissional->name ?? '-' }}</td>
                    <td>{{ $consulta->data_hora }}</td>
                    <td>
                        <a href="{{ route('consultas.edit', $consulta->id) }}">Editar</a>
                        <form action="{{ route('consultas.delete', $consulta->id) }}" method="POST" style="display:inline;">
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
