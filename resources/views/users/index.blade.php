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
        @if ($usersList->count() > 0)
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($usersList as $user)
                        <tr>
                            <td>
                                <a href="/users/{{ $user->id }}">
                                    {{ $user->id }}
                                </a>
                            </td>
                            <td>{{ $user->name }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        @else
            <p>Usuarios não encontrados! </p>
        @endif
        </ul>
</body>

</html>
