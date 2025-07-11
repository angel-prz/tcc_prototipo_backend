<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>>Horario</title>
</head>
<body>
    @if ($horarioProfissional)
        <h1>{{ $horarioProfissional->id }}</h1>
        <ul>
            <li>Profissional: {{ $horarioProfissional->profissional->user->name ?? '-' }}</li>
            <li>Dia: {{ $horarioProfissional->dia_semana }}</li>
            <li>Entrada: {{ $horarioProfissional->entrada }}</li>
            <li>Saída: {{ $horarioProfissional->saida }}</li>
        </ul>
    @else
        <p>Horário profissional não encontrado!</p>
    @endif
    <a href="/horarios_profissional">&#9664;Voltar</a>
