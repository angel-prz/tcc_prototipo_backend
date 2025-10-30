<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta</title>
</head>
<body>
    @if ($consulta)
            <h1>{{ $consulta->id}}</h1>
            <ul>
                <li>Paciente: {{ $consulta->paciente->user->name }}</li>
                <li>Profissional: {{ $consulta->profissional->user->name }} </li>
                <li>Status: {{ $consulta->status}} </li>
                <li>Observação: {{ $consulta->observacao}} </li>
                <li>Data: {{ $consulta->data}} </li>
                <li>Hora: {{ $consulta->hora}} </li>
            </ul>
        @else
            <p>Consulta não encontrada! </p>
    @endif
    <a href="/consultas">&#9664;Voltar</a>
</body>
</html>
