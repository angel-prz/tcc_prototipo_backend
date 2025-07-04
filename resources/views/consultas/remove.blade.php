<!-- Very little is needed to make a happy life. - Marcus Aurelius -->
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
        <h1>{{ $consulta->id }}</h1>
        <ul>
            <li>Paciente: {{ $consulta->paciente_id }}</li>
            <li>Profissional: {{ $consulta->profissional_id }} </li>
            <li>Status: {{ $consulta->status}} </li>
            <li>Observação: {{ $consulta->obersavacao}} </li>
            <li>Data e hora: {{ $consulta->data_hora}} </li>
        </ul>
    @else
        <p>Consulta não encontrada! </p>
    @endif
    <form action="{{route('consulta.remove', $consulta->id)}}" method="post">
        @csrf
        <h1>DESEJA CONFIRMAR EXCLUSÃO DA CONSULTA</h1>
        <input type="submit" value="Excluir"/>
    </form>
    <a href="/consultas">&#9664;Cancelar</a>
</body>
</html>
