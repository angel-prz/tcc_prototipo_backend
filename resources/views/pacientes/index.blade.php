<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pacientes</title>
</head>

<body>
    <h1>Pacientes:</h1>
    <table>
        @if ($pacientesList->count() > 0)
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($pacientesList as $paciente)
                        <tr>
                            <td>
                                <a href="/pacientes/{{ $paciente->id }}">
                                    {{ $produto->id }}
                                </a>
                            </td>
                            <td>{{ $paciente->nome }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        @else
            <p>Pacientes não encontrados! </p>
        @endif
        </ul>
</body>

</html>
