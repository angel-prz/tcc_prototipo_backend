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

                        <td>
                            <a href="/consultas/{{ $consulta->id }}">{{ $consulta->id }}
                            </a>
                        </td>

                    <td>{{ $consulta->paciente->user->name ?? '-' }}</td>
                    <td>{{ $consulta->profissional->user->name ?? '-' }}</td>
                    <td>{{ $consulta->data }}</td>
                    <td>{{ $consulta->hora }}</td>
                    <td>
                        <a href="{{ route('consulta.edit', $consulta->id) }}">
                            Editar
                        </a>
                    </td>
                    <td>
                        <a href="{{ route('consulta.delete',$consulta->id) }}">
                            DELETAR
                        </a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
