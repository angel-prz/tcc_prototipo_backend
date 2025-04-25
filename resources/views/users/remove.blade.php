
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuario</title>
</head>
<body>
    
    @if ($user)
        <h1>{{ $user->nome }}</h1>
        <ul>
            <li>Email: {{ $user->email }}</li>
            <li>Data Nascimento: {{ $user->data_nascimento }} </li>
            <li>Sexo: {{ $user->sexo}} </li>
            <li>Ttipo de Usuario: {{ $user->tipo_usuario}} </li>
        </ul>
    @else
        <p>Usuario não encontrado! </p>
    @endif
    <form action="{{route('remove', $user->id)}}" method="post">
        @csrf
        <h1>DESEJA CONFIRMAR EXCLUSÃO DO USUARIO {{$user->nome}} </h1>
        <input type="submit" value="Excluir"/>
    </form>
    <a href="/users">&#9664;Cancelar</a>
</body>
</html>
