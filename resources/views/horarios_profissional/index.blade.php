<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuario</title>
</head>

<body>
<h1>Agenda dos Profissionais</h1>
    <a href="{{ route('horario_profissional.create') }}">Criar Novo Horario</a>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Profissional</th>
                <th>Dia</th>
                <th>Entrada</th>
                <th>Saída</th>
            </tr>
        </thead>
        <tbody>
     <tbody>
            @foreach ($horariosProfissional as $horarioProfissional)
                <tr>
                    <td>{{ $horarioProfissional->id }}</td>
                    <td>{{ $horarioProfissional->profissional->user->name ?? '-' }}</td>
                    <td>{{ $horarioProfissional->dia_semana}}</td>
                    <td>{{ $horarioProfissional->entrada}}</td>
                    <td>{{ $horarioProfissional->saida}}</td>

                    <td>
                        <a href="{{ route('horario_profissional.edit', $horarioProfissional->id) }}">
                            Editar
                        </a>
                    </td>
                    <td>
                        <a href="{{ route('horario_profissional.delete', $horarioProfissional->id) }}">
                            DELETAR
                        </a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
