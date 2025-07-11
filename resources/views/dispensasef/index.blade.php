<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuario</title>
</head>

<body>
    <div>
        <h1>Lista de Dispensas</h1>
        <a href="{{ route('dispensaef.create') }}">Nova Dispensa</a>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Aluno</th>
                    <th>Consulta</th>
                    <th>Turma</th>
                    <th>Motivo</th>
                    <th>Comeco</th>
                    <th>Fim</th>
                    <th>Número de dias</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($dispensas as $dispensa)
                    <tr>
                        <td>{{ $dispensa->id }}</td>
                        <td>{{ $dispensa->paciente_id }}</td>
                        <td>{{ $dispensa->consulta_id }}</td>
                        <td>{{ $dispensa->turma }}</td>
                        <td>{{ $dispensa->motivo }}</td>
                        <td>{{ $dispensa->comeco }}</td>
                        <td>{{ $dispensa->fim }}</td>
                        <td>{{ $dispensa->numero_dias }}</td>
                        <td>
                            <a href="{{ route('dispensaef.edit', $dispensa->id) }}">
                                Editar
                            </a>
                        </td>
                        <td>
                            <a href="{{ route('dispensaef.delete',$dispensa->id) }}">
                                DELETAR
                            </a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</body>
