<!-- An unexamined life is not worth living. - Socrates -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Atualizar Horario</title>
</head>

<body>
    <h1>Atualizar Horario de Profissional ID: {{$horario->profissional_id}}</h1>
    <form action="{{route('horario_profissional.update',$horario->id)}}" method="POST">
        @csrf
        {{-- <input type="hidden" name="_token" value="{{csrf_token()}}"/> --}}
        <table>
            <tr>
                <label for="horarios->id">Profissional ID:</label>
                <input id="horario->id" name="horario->id" type="text" value="{{$horario->profissional_id}}" readonly/>
            </tr>
            <tr>
                <td>Dia:</td>
                <td><input type="text" name="dia_semana" value="{{$horario->dia_semana}}"/></td>
            </tr>
            <tr>
                <td>Horario de Entrada:</td>
                <td><input type="time" name="entrada" value="{{$horario->entrada}}" /></td>
            </tr>

            <tr>
                <td>Horario de Saida:</td>
                <td><input type="time" name="saida" value="{{$horario->saida}}"/></td>
            </tr>

            <tr align="center">
                <td colspan="2"><input type="submit" value="Atualizar"/></td>
            </tr>
            <tr align="center">
                <td colspan="2"><a href="/horarios_profissional" style="display: inline">&#9664;&nbsp;Voltar</a></td>
            </tr>

        </table>
    </form>
</body>

</html>
