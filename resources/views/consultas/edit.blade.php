<!-- An unexamined life is not worth living. - Socrates -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>Atualizar Consulta</h1>
    <form action="{{route('consulta.update',$consulta->id)}}" method="POST">
        @csrf
        {{-- <input type="hidden" name="_token" value="{{csrf_token()}}"/> --}}
        <table>

           <tr>
                <td>Data:</td>
                <td><input type="date" name="data" value="{{$consulta->data}}"/></td>
            </tr>
            <tr>
                <td>Hora:</td>
                <td><input type="time" name="hora" value="{{$consulta->hora}}/></td>
            </tr>

            <tr align="center">
                <td colspan="2"><input type="submit" value="Criar"/></td>
            </tr>
            <tr align="center">
                <td colspan="2"><a href="/consultas" style="display: inline">&#9664;&nbsp;Voltar</a></td>
            </tr>

        </table>
    </form>
</body>

</html>

