<!-- Act only according to that maxim whereby you can, at the same time, will that it should become a universal law. - Immanuel Kant -->
<!-- Very little is needed to make a happy life. - Marcus Aurelius -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Horario</title>
</head>
<body>
    @if ($horario)
        <h1>{{ $horario->id }}</h1>
        <ul>
            <li>Profissional: {{ $horario->profissional->user->name ?? '-' }}</li>
            <li>Dia: {{ $horario->dia_semana }}</li>
            <li>Entrada: {{ $horario->entrada }}</li>
            <li>Saída: {{ $horario->saida }}</li>
        </ul>
    @else
        <p>Horário profissional não encontrado!</p>
    @endif
    <form action="{{ route('horario_profissional.remove', $horario->id) }}" method="POST">
        @csrf
        <h1>DESEJA CONFIRMAR EXCLUSÃO DO HORÁRIO PROFISSIONAL?</h1>
        <input type="submit" value="Excluir"/>
    </form>
    <a href="/horarios_profissional">&#9664;Cancelar</a>
</body>
</html>
