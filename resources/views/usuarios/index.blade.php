<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuario</title>
</head>

<body>
    <h1>Usuario:</h1>
    <table>
        @if ($usuariosList->count() > 0)
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($usuariosList as $usuario)
                        <tr>
                            <td>
                                <a href="/usuarios/{{ $usuario->id }}">
                                    {{ $usuario->id }}
                                </a>
                            </td>
                            <td>{{ $usuario->nome }}</td>
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
